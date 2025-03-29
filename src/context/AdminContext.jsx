import { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [aToken, setToken] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  console.log(backendUrl);
  const value = {
    aToken,
    setToken,
    backendUrl,
  };
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
