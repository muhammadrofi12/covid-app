import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalsContext = createContext();

export const GlobalsProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    axios
      .get("https://covid-fe-2023.vercel.app/api/global.json")
      .then((response) => {
        setGlobalData(response.data.global);
        setRegions(response.data.regions);
      })
      .catch((error) => {
        console.error("Error fetching the data: ", error);
      });
  }, []);

  return (
    <GlobalsContext.Provider value={{ globalData, regions }}>
      {children}
    </GlobalsContext.Provider>
  );
};
