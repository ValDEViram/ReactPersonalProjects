import { NavLink } from "react-router-dom";
import { Product } from "../types/Products";

interface productCardProps {
  product: Product;
}
function ProductsCard({ product }: productCardProps) {
  return (
    <article
      className={"bg-[#FEFEFE] w-[250px] grid p-2 shadow-[#404E68] shadow-md"}
      key={product.id}
    >
      <img
        className="object-cover w-64 h-32"
        src={product.imgName}
        alt="Imagen del producto"
      />
      <h3
        className={`text-lg font-bold ${
          product.stock <= 0
            ? "text-red-500"
            : product.stock < 30
            ? "text-yellow-500"
            : ""
        }`}
      >
        {product.product}
      </h3>
      <div className="flex justify-between px-4">
        <p className="text-gray-500">{product.brand}</p>
        <p className="text-gray-500">{product.quantity}</p>
      </div>
      <div className="flex justify-between px-4">
        <p className="text-gray-500">Disponibilidad: {product.stock}</p>
        <p className="text-gray-500">${product.price}</p>
      </div>
      <NavLink
        className={"bg-[#7697BB] text-white text-center rounded"}
        to={`/product/${product.product}/${product.id}`}
      >
        Editar producto
      </NavLink>
    </article>
  );
}

export default ProductsCard;
