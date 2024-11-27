import { Phone } from "../interfaces/Phone";

export const getPhones = async (): Promise<Phone[]> => {
  const response = await fetch("/data.json");
  if (!response.ok) {
    throw new Error("Failed to load phone data");
  }
  return response.json();
};

