import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPhones } from "../services/phoneService";
import { Phone } from "../interfaces/Phone";

const HomePage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const data = await getPhones();
        setPhones(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    };
    fetchPhones();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container">
      <h1>PhoneCAT</h1>
      <div className="grid">
        {phones.map((phone) => (
          <div key={phone.id} className="card">
            <img src={phone.imageUrl} alt={phone.name} />
            <h3>{phone.name}</h3>
            <p>${phone.price}</p>
            <Link to={`/phones/${phone.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
// old code without style 
//   return (
//     <div>
//       <h1>PhoneCAT</h1>
//       <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
//         {phones.map((phone) => (
//           <div key={phone.id} style={{ border: "1px solid #ddd", padding: "1rem" }}>
//             <img src={phone.imageUrl} alt={phone.name} style={{ width: "150px", height: "150px" }} />
//             <h3>{phone.name}</h3>
//             <p>${phone.price}</p>
//             <Link to={`/phones/${phone.id}`}>View Details</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default HomePage;

