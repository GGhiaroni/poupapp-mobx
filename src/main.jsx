import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./GlobalStyle/index.jsx";
import { StoreProvider } from "./mobx/StoreContext.jsx";
import Cadastro from "./screens/Cadastro/Cadastro.jsx";
import Home from "./screens/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </StoreProvider>
  </StrictMode>
);
