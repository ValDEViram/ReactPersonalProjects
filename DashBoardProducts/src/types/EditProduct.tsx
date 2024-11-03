import { Product } from "./Products";

export const formFields: Array<{
  name: keyof Product;
  label: string;
  type: string;
}> = [
  { name: "product", label: "Nombre", type: "text" },
  { name: "brand", label: "Marca", type: "text" },
  { name: "quantity", label: "Cantidad", type: "text" },
  { name: "price", label: "Precio", type: "number" },
  { name: "category", label: "Categoría", type: "text" },
  { name: "stock", label: "Disponibilidad", type: "number" },
  { name: "offer", label: "Oferta disponible", type: "number" },
  { name: "imgName", label: "Imagen", type: "text" },
];
