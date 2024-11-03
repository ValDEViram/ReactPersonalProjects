import { Product } from "../types/Products";
import ProductsCard from "../components/productsCard";
import { useLoaderData, useParams } from "react-router-dom";

function App() {
  const products = useLoaderData() as Product[];
  const { category } = useParams<{ category: string }>();

  return (
    <main className="py-12">
      <h1 className="font-bold text-3xl mb-4">
        {category ? `${category}` : "Todos los productos"}
      </h1>
      <section className="grid grid-cols-5 gap-10">
        {products?.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

export default App;
