import Image from "next/image";
import { IoThumbsUpSharp, IoHeart, IoHappy, IoBagHandle } from "react-icons/io5";

const goals = [
  {
    icon: <IoThumbsUpSharp />,
    title: "Menyediakan Produk Berkualitas",
    desc: "Kami menyediakan berbagai produk keluarga dari merek ternama yang telah memenuhi standar keamanan dan kualitas terpercaya."
  },
  {
    icon: <IoHeart />,
    title: "Perawatan Penuh Cinta",
    desc: "Mendukung keluarga dalam memberikan perhatian terbaik untuk kesejahteraan sehari-hari dengan produk yang tepat."
  },
  {
    icon: <IoHappy />,
    title: "Tumbuh Bahagia Selalu",
    desc: "Memberikan solusi tepat untuk membantu keluarga tumbuh bahagia dan sehat dengan penuh kasih sayang dan perhatian."
  },
  {
    icon: <IoBagHandle />,
    title: "Belanja Jadi Lebih Mudah",
    desc: "Kami hadir untuk mempermudah Anda menemukan produk terbaik melalui platform yang praktis dan terpercaya."
  }
]

const Goals = () => {
  return (
    <section
      id="goals"
      className="mt-36 px-4 md:px-8 lg:px-16 scroll-mt-24 lg:scroll-mt-64"
    >
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-5 my-auto">
          <Image
            src="/assets/image/goals-section-image.png"
            width={760}
            height={862}
            alt="Goals Image"
            className="px-6 md:px-24 lg:px-0"
          />
        </div>
        <div className="col-span-12 lg:col-span-7 text-center lg:text-left my-auto">
          <span className="text-xs md:text-base text-[#F6AE00] font-bold uppercase tracking-[.25em]">Our goals</span>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-8 mt-3">Tujuan Besar Kami di RafliFamily Mart</h1>
          <p className="text-sm md:text-lg text-justify lg:text-left font-light mb-8">
            Kami berkomitmen menjadi solusi utama untuk memenuhi kebutuhan keluarga dengan menyediakan pengalaman belanja yang praktis, terpercaya, dan membawa manfaat nyata, demi mendukung kenyamanan dan kebahagiaan keluarga.
          </p>
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {goals.map((goal, index) => (
              <div key={index} className="col-span-12 md:col-span-6 bg-[#1B1D22] text-center rounded-xl p-8">
                <div className="inline-block bg-[#33373F] text-[#F6AE00] text-3xl rounded-2xl p-4 mb-2">
                  {goal.icon}
                </div>
                <h3 className="text-base font-semibold mb-2">
                  {goal.title}
                </h3>
                <p className="text-xs text-justify lg:text-center font-extralight">
                  {goal.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Goals;