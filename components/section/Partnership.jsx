import Link from "next/link";
import Image from "next/image";

const Partnership = () => {
  return (
    <section
      id="partnership"
      className="mt-36 px-4 md:px-8 lg:px-16 scroll-mt-24 lg:scroll-mt-64"
    >
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-5 text-center lg:text-left my-auto">
          <span className="text-xs md:text-base text-[#F6AE00] font-bold uppercase tracking-[.25em]">Our partner</span>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-8 mt-3">Partnership Kami</h1>
          <p className="text-sm md:text-lg font-light mb-8">
            Rafli.Family Mart menjalin kemitraan dengan Rafyangar IT Solution dan Ulasan Pendidikan untuk  memberikan layanan yang lebih baik kepada keluarga Indonesia.
          </p>
          <button className="bg-[#F6AE00] text-white rounded-xl py-3 lg:py-4 px-9 lg:px-12">
            <Link className="text-sm lg:text-base font-semibold" href="/">Bergabung mitra</Link>
          </button>
        </div>
        <div className="col-span-12 lg:col-span-7 text-center lg:text-left my-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <div className="relative w-full aspect-video">
                <Image
                  src="/assets/image/logo-rafyangar.png"
                  width={467}
                  height={467}
                  alt="Logo Rafyangar"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl p-1"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="relative w-full aspect-video">
                <Image
                  src="/assets/image/logo-ulasan-pendidikan.png"
                  width={467}
                  height={467}
                  alt="Logo Ulasan Pendidikan"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Partnership;