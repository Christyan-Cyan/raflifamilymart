import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-no-repeat px-4 md:px-8 lg:px-16"
      style={{ backgroundImage: `url("/assets/image/hero-background.png")` }}
      >
      <div className="absolute inset-0 bg-black bg-opacity-35"></div>
      <div className="relative max-w-4xl text-center mx-auto py-48 md:py-64">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Solusi Lengkap Kebutuhan Keluarga Anda
        </h1>
        <p className="text-lg md:text-xl font-medium pt-7">
          Belanja Praktis, Semua Kebutuhan Keluarga dalam Genggaman.
        </p>
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 text-lg font-semibold px-0 md:px-12 lg:px-32 pt-12">
          <button className="w-full bg-[#F6AE00] text-white rounded-xl py-4">
            <Link href="/">Belanja sekarang</Link>
          </button>
          <button className="w-full bg-transparent text-[#F6AE00] border-2 border-[#F6AE00] rounded-xl py-4">
            <Link href="/">Lihat Selengkapnya</Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero;