import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  const [categories, setCategories] = useState<[] | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const resCategories = await fetch(
        "http://localhost:3000/products/categories"
      );
      const dataCategories = await resCategories.json();

      setCategories(dataCategories);
    };
    fetchCategories();
  }, []);

  return (
    <aside className="bg-[#FEFEFE] h-svh sticky px-4 py-8 flex flex-col gap-12 shadow-lg shadow-black">
      <h1 className="font-bold text-3xl">SaboresBase</h1>
      <section>
        <details>
          <summary className="text-xl font-bold">Productos</summary>
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-[#7697BB] text-sm px-6 ${
                  isActive ? "underline font-bold text-[#404E68]" : ""
                }`
              }
            >
              Todos los productos
            </NavLink>
          </div>
          {categories?.map((category) => (
            <div>
              <NavLink
                to={`/productos/${category}`}
                className={({ isActive }) =>
                  `text-[#7697BB] text-sm px-6 ${
                    isActive ? "underline font-bold text-[#404E68]" : ""
                  }`
                }
              >
                {category}
              </NavLink>
            </div>
          ))}
        </details>
      </section>
    </aside>
  );
}

export default NavigationBar;
