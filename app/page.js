import Link from "next/link";
import Image from "next/image";

import { IoCart, IoWallet, IoShieldCheckmark } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai"

import Hero from "@/components/section/Hero";
import AboutUs from "@/components/section/AboutUs";
import ProductCategories from "@/components/section/ProductCategories"
import Goals from "@/components/section/Goals";
import Partnership from "@/components/section/Partnership";
import Testimonial from "@/components/section/Testimonial";
import Contact from "@/components/section/Contact"
import FAQ from "@/components/section/FAQ";

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

      <Partnership />

      <Testimonial />

      <Contact />

      <section
        id="support"
        className="lg:max-w-7xl mx-auto mt-36 px-4 md:px-8 lg:px-16 scroll-mt-24 lg:scroll-mt-64"
      >
        <div className="bg-gradient-to-r from-[#161A22] via-[#1A202C] to-[#2D3748] rounded-xl p-12 shadow-lg">
          <div className="grid grid-cols-12 gap-4 text-center lg:text-left lg:gap-8">
            <div className="col-span-12 lg:col-span-7 my-auto">
              <span className="text-xs md:text-base text-[#F6AE00] font-semibold uppercase tracking-[.25em]">Support us</span>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4 lg:mb-8 mt-3">
                Traktir Kopi
              </h1>
              <p className="text-sm md:text-lg text-justify lg:text-left font-light text-white mb-8">
                Traktirin kita kopi yuk! Dengan donasi secangkir kopi, kamu nggak cuma bikin kita semangat terus berkarya,
                tapi juga jadi bagian dari perjalanan seru ini. Setiap tegukan kopi dari kamu adalah dukungan besar buat ide-ide
                baru, konten seru, dan energi positif yang terus mengalir. Terima kasih sudah jadi bagian dari cerita ini!
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 my-auto lg:ml-auto">
              <Image
                src="/assets/image/qr-support.png"
                width={400}
                height={400}
                alt="QR Support"
                className="m-auto p-4"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ />

    </>
  );
}
