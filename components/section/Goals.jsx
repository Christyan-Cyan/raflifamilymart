import Image from "next/image";
import { IoCart } from "react-icons/io5";

const Goals = () => {
  return (
    <section
      id="goals"
      className="mt-28 px-16"
    >
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-5 my-auto">
          <Image
            src="/assets/image/goals-section-image.png"
            width={760}
            height={862}
            alt="Goals Image"
            className=""
          />
        </div>
        <div className="col-span-7 my-auto">
          <span className="text-xs md:text-base text-[#F6AE00] font-bold uppercase tracking-[.25em]">Our goals</span>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 lg:mb-8 mt-3">Tujuan Besar Kami di RafliFamily Mart</h1>
          <p className="text-sm md:text-lg font-light mb-8">
            Kami berkomitmen menjadi solusi utama untuk memenuhi kebutuhan keluarga dengan menyediakan pengalaman belanja yang praktis, terpercaya, dan membawa manfaat nyata, demi mendukung kenyamanan dan kebahagiaan keluarga.
          </p>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6 bg-[#1B1D22] text-center rounded-xl p-8">
              <div className="inline-block bg-[#F6AE00] text-2xl rounded-2xl p-4 mb-2">
                <IoCart />
              </div>
              <h3 className="text-lg font-semibold mb-2">Menyediakan Produk Berkualitas</h3>
              <p className="text-sm font-light">Kami menyediakan berbagai produk keluarga dari merek ternama yang telah memenuhi standar keamanan dan kualitas terpercaya.</p>
            </div>
            <div className="col-span-6 bg-[#1B1D22] text-center rounded-xl p-8">
              <div className="inline-block bg-[#F6AE00] text-2xl rounded-2xl p-4 mb-2">
                <IoCart />
              </div>
              <h3 className="text-lg font-semibold mb-2">Menyediakan Produk Berkualitas</h3>
              <p className="text-sm font-light">Kami menyediakan berbagai produk keluarga dari merek ternama yang telah memenuhi standar keamanan dan kualitas terpercaya.</p>
            </div>
            <div className="col-span-6 bg-[#1B1D22] text-center rounded-xl p-8">
              <div className="inline-block bg-[#F6AE00] text-2xl rounded-2xl p-4 mb-2">
                <IoCart />
              </div>
              <h3 className="text-lg font-semibold mb-2">Menyediakan Produk Berkualitas</h3>
              <p className="text-sm font-light">Kami menyediakan berbagai produk keluarga dari merek ternama yang telah memenuhi standar keamanan dan kualitas terpercaya.</p>
            </div>
            <div className="col-span-6 bg-[#1B1D22] text-center rounded-xl p-8">
              <div className="inline-block bg-[#F6AE00] text-2xl rounded-2xl p-4 mb-2">
                <IoCart />
              </div>
              <h3 className="text-lg font-semibold mb-2">Menyediakan Produk Berkualitas</h3>
              <p className="text-sm font-light">Kami menyediakan berbagai produk keluarga dari merek ternama yang telah memenuhi standar keamanan dan kualitas terpercaya.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Goals;