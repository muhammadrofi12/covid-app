import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const IndonesiansContext = createContext();

export const IndonesiansProvider = ({ children }) => {
  const [indonesiansData, setIndonesianData] = useState([]);
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    axios
      .get("https://covid-fe-2023.vercel.app/api/indonesia.json")
      .then((response) => {
        const { indonesia, regions } = response.data;
        setIndonesianData(indonesia);
        setProvinces(regions.filter((region) => region.type === "province"));
      })
      .catch((error) => {
        console.error("Error fetching the data: ", error);
      });
  }, []);

  return (
    <IndonesiansContext.Provider value={{ indonesiansData, provinces }}>
      {children}
    </IndonesiansContext.Provider>
  );
};
