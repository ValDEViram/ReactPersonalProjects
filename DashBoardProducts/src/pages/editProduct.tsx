import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Product } from "../types/Products";
import { formFields } from "../types/EditProduct";

export default function EditProduct() {
  const product: Product = useLoaderData() as Product;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: product,
  });

  const onSubmit = async (data: Product) => {
    const { id, ...productData } = data;
    try {
      const response = await fetch(
        `http://localhost:3000/products/editProduct/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en respuesta del servidor:", errorData);
        alert(
          `Error al editar el producto: ${errorData.message || "Desconocido"}`
        );
      } else {
        alert("Producto editado correctamente");
      }
    } catch (error) {
      console.error("Error en el envío de la solicitud:", error);
      alert("Hubo un error al editar el producto");
    }
  };

  return (
    <>
      <h2 className="font-bold text-3xl py-12">
        Editar Producto - {product.id}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white mr-8 mb-8 p-8 shadow-[#404E68] shadow-md"
      >
        {formFields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="text-xl font-bold">{field.label}</label>
            <input
              type={field.type}
              {...register(field.name, { required: true })}
              className="border border-[#DEDEDE] px-4 py-2 rounded w-full shadow-[#7697BB] shadow-sm"
            />
            {errors[field.name] && (
              <span className="text-red-500">Este campo es requerido</span>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-[#7697BB] text-white py-2 px-4 rounded w-full border border-[#404E68]"
        >
          Guardar Cambios
        </button>
      </form>
    </>
  );
}
