import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages";
import "./index.css";
import Layout from "./components/layout";
import EditProduct from "./pages/editProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,

        loader: async () => {
          const response = await fetch(
            `http://localhost:3000/products/products`
          );
          if (!response.ok) {
            throw new Error("Productos no encontrados");
          }
          return response.json();
        },
      },
      {
        path: "products/:category",
        element: <App />,

        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:3000/products/getProductByCategory/${params.category}`
          );
          if (!response.ok) {
            throw new Error("Productos no encontrados");
          }
          return response.json();
        },
      },
      {
        element: <EditProduct />,
        path: "product/:productName/:productID",

        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:3000/products/products/${params.productID}`
          );
          if (!response.ok) {
            throw new Error("Producto no encontrado");
          }
          return response.json();
        },
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
