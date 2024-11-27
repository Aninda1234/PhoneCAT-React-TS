import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPhones } from "../services/phoneService";
import { Phone } from "../interfaces/Phone";

const PhoneDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get the phone ID from the route parameters
    const navigate = useNavigate(); // Correctly import and use the useNavigate hook
  const [phone, setPhone] = useState<Phone | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhone = async () => {
      try {
        const phones = await getPhones();
        const selectedPhone = phones.find((p) => p.id === id);
        setPhone(selectedPhone || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    };
    fetchPhone();
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!phone) {
    return <p>Phone not found!</p>;
  }

    // Ensure the image URL is resolved correctly
    const imageUrl = phone.imageUrl.startsWith("/") ? phone.imageUrl : `/${phone.imageUrl}`;

    return (
        <div className="container">
            <button onClick={() => navigate(-1)} style={{ margin: "1rem 0" }}>
                ← Back
            </button>
          <h1>{phone.name}</h1>
          <div style={{ display: "flex", gap: "1rem", flexDirection: "column", alignItems: "center" }}>
            <img src={imageUrl} alt={phone.name} style={{ maxWidth: "100%", borderRadius: "8px" }} />
            {/* phone.imageUrl will not work because React router dom handles routing relative to current route  */}
            {/* <img src={phone.imageUrl} alt={phone.name} style={{ width: "300px" }} /> */}
            <p>{phone.description}</p>
            <p>Price: ${phone.price}</p>
            <p>OS: {phone.android.os}</p>
            <p>Camera: {phone.camera.primary}</p>
          </div>
        </div>
      );
    };

    // old code without styles 
//   return (
//     <div>
//       <h1>{phone.name}</h1>
//       <img src={imageUrl} alt={phone.name} style={{ width: "300px" }} />
//       {/* phone.imageUrl will not work because React router dom handles routing relative to current route  */}
//       {/* <img src={phone.imageUrl} alt={phone.name} style={{ width: "300px" }} /> */}
//       <p>{phone.description}</p>
//       <p>Price: ${phone.price}</p>
//       <p>OS: {phone.android.os}</p>
//       <p>Camera: {phone.camera.primary}</p>
//     </div>
//   );
// };

export default PhoneDetailsPage;

