import React from "react";
import { createContext } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const appName = "EasyBill";
  return (
    <DataContext.Provider value={{ appName: appName }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
