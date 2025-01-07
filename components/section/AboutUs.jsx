import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="grid grid-cols-12 gap-8 px-4 md:px-8 lg:px-16 mt-96 lg:mt-64 scroll-mt-24 lg:scroll-mt-64"
      >
      <div className="col-span-12 lg:col-span-5">
        <Image
          src="/assets/image/about-us-section-image.png"
          width={761}
          height={655}
          alt="About Us Image"
          className="px-6 md:px-24 lg:px-0"
        />
      </div>
      <div className="col-span-12 lg:col-span-7 text-center lg:text-left my-auto">
        <span className="text-xs md:text-base text-[#F6AE00] font-bold uppercase tracking-[.25em]">About us</span>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 lg:mb-8 mt-3">Temukan beragam produk kebutuhan untuk keluarga Anda di Rafli.FamilyMart</h1>
        <p className="text-sm md:text-lg font-light mb-8">
          RafliFamily Mart adalah platform pihak ketiga yang menghubungkan keluarga dengan berbagai produk berkualitas.
          Kami hadir untuk memudahkan menemukan pilihan terbaik dari berbagai merek terkemuka yang aman, nyaman, dan sesuai dengan kebutuhan keluarga Anda.
          Sebagai mitra andal, RafliFamily Mart memastikan setiap produk yang kami tawarkan telah melalui seleksi dan memenuhi standar keamanan dan kualitas yang terpercaya.
          Dengan fokus pada kemudahan, kami menjadi jembatan antara keluarga dan solusi terbaik untuk kesejahteraan sehari-hari.
        </p>
        <button className="bg-[#F6AE00] text-white rounded-xl py-3 lg:py-4 px-9 lg:px-12">
          <Link className="text-sm lg:text-base font-semibold" href="/">Jelajahi Produk</Link>
        </button>
      </div>
    </section>
  )
}

export default AboutUs;