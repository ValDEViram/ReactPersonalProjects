import { useEffect, useState } from "react";
import { Product } from "../types/Products";
import ProductsCard from "../components/productsCard";

function App() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/products/products");
      const data: Product[] = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <main className="py-12 px-8">
      <h1 className="font-bold text-3xl mb-4">Todos los productos</h1>
      <section className="grid grid-cols-5 gap-10">
        {products?.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

export default App;
