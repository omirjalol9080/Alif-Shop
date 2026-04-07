import { notFound } from "next/navigation";
import axios from "axios";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import DApps from "@/app/components/DownApps/DApps";

async function getPraductsById(id) {
  try {
    const res = await axios.get("https://6dde240d7bb14ccf.mokky.dev/Praducts");
    const product = res.data.find((item) => String(item.id) === String(id));
    return product;
  } catch (error) {
    console.error("API xatosi:", error);
    return null;
  }
}

// 🔥 "use client" yo'q! Bu SERVER COMPONENT
export default async function ProductPage({ params }) {
  const praducts = await getPraductsById(params.id);

  if (!praducts) return notFound();

  return (
    <>
      <img src={praducts.img} alt="img" />
      <h1>{praducts.name}</h1>
      <p>{praducts.oldprices}</p>
      <p>{praducts.prices}</p>
    </>
  );
}
