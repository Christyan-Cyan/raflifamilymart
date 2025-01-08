import Image from "next/image";
import { FaStar } from "react-icons/fa";

const CardTestimonial = () => {
  return (
    <>
      <div className="bg-[#161A22] rounded-2xl p-8">
        <p className="text-justify text-sm">Belanja kebutuhan di Rafli.FamilyMart benar-benar memudahkan saya untuk memenuhi kebutuhan keluarga.
          Produknya lengkap, harganya terjangkau, dan kualitasnya tidak perlu diragukan lagi.
          Sekarang, saya bisa belanja dengan nyaman dari rumah tanpa harus repot keluar.
          Pelayanan pelanggannya juga sangat responsif dan ramah!
        </p>

        <div className="flex flex-row mt-6">
          <Image
            src="/assets/image/person.png"
            width={64}
            height={64}
            alt="Testimonial user"
            className="max-w-10"
          />
          <h1 className="text-medium text-sm ml-4 my-auto">Budiono siregar</h1>
          <div className="flex flex-row gap-2 ml-auto my-auto">
            <FaStar className="text-[#F6AE00]" />
            <FaStar className="text-[#F6AE00]" />
            <FaStar className="text-[#F6AE00]" />
            <FaStar className="text-[#F6AE00]" />
            <FaStar className="text-[#F6AE00]" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardTestimonial;