import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages";
import "./index.css";
import Layout from "./components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Usa el Layout como el elemento principal
    children: [
      {
        path: "",
        element: <App />, // Renderiza App en la ruta principal
      },
      {
        path: "productos/Lácteos",
        element: <div>Todos los productos</div>,
      },
      {
        path: "productos/Carnes",
        element: <div>Todos los productos</div>,
      },
      {
        path: "productos/Frutas y Verduras",
        element: <div>Todos los productos</div>,
      },
      {
        path: "productos/Granos y Cereales",
        element: <div>Todos los productos</div>,
      },
      // Agrega más rutas aquí según sea necesario
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
