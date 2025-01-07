import Link from "next/link";
import Image from "next/image";

import { IoCart, IoWallet, IoShieldCheckmark } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai"

import Hero from "@/components/section/Hero";
import AboutUs from "@/components/section/AboutUs";
import ProductCategories from "@/components/section/ProductCategories"
import Goals from "@/components/section/Goals";

import CardFeature from "../components/CardFeature";

const feature = [
  { icon: <IoCart />, title: "Kemudahan Berbelanja", desc: "Belanja cepat dan mudah untuk kebutuhan keluarga." },
  { icon: <IoWallet />, title: "Harga Terjangkau", desc: "Produk berkualitas dengan harga yang terjangkau." },
  { icon: <IoShieldCheckmark />, title: "Keamanan Terjaga", desc: "Produk dipilih dengan cermat untuk kenyamanan anda." },
  { icon: <AiFillProduct />, title: "Pilihan Lengkap", desc: "Beragam kategori produk untuk kehidupan sehari-hari." }
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* feature section */}
      <div className="absolute z-10 -mt-36 lg:-mt-28 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-12 gap-4 lg:gap-8">
          {feature.map((feature, index) => (
            <div key={index} className="col-span-6 lg:col-span-3">
              <CardFeature icon={feature.icon} title={feature.title} desc={feature.desc} />
            </div>
          ))}
        </div>
      </div>

      <AboutUs />

      <ProductCategories />

      <Goals />

    </>
  );
}
