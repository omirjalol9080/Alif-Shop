import { notFound } from "next/navigation";

async function getProductListById(id) {
  try {
    const res = await fetch("https://6dde240d7bb14ccf.mokky.dev/PraductsList", {
      cache: "no-store", // har doim yangilanishi uchun
    });
    const data = await res.json();
    const product = data.find((item) => String(item.id) === String(id));
    return product;
  } catch (error) {
    console.error("API xatosi:", error);
    return null;
  }
}

export default async function ProductListPage({ params }) {
  const product = await getProductListById(params.id);
  if (!product) return notFound();

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>Old price: {product.oldprices}</p>
      <p>Price: {product.prices}</p>
    </div>
  );
}
