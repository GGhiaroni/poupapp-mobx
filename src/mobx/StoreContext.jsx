import { usuarioStore } from "./usuarioStore";

import { createContext } from "react";

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{ usuarioStore }}>
      {children}
    </StoreContext.Provider>
  );
};
