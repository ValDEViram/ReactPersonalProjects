import { Product } from "../types/Products";

interface productCardProps {
  product: Product;
}
function ProductsCard({ product }: productCardProps) {
  return (
    <article className="bg-[#FEFEFE] w-[250px]" key={product.id}>
      <h1>{product.imgName}</h1>
      <h3 className="text-lg font-bold">{product.product}</h3>
      <div className="flex justify-between px-4">
        <p className="">{product.brand}</p>
        <p>{product.quantity}</p>
      </div>
    </article>
  );
}

export default ProductsCard;
