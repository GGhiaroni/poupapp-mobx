import { usuarioStore } from "./usuarioStore";

const { createContext } = require("react");

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  <StoreContext.Provider value={{ usuarioStore }}>
    {children}
  </StoreContext.Provider>;
};
