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
          <p className="text-sm md:text-lg text-justify lg:text-left font-light mb-8">
            Rafli.Family Mart menjalin kemitraan dengan Rafyangar IT Solution dan Ulasan Pendidikan untuk  memberikan layanan yang lebih baik kepada keluarga Indonesia.
          </p>
          <Link className="text-sm lg:text-base font-semibold" href="https://wa.me/6287887488113?text=Halo%2C%20saya%20tertarik%20untuk%20menjadi%20mitra%20atau%20menjalin%20kerja%20sama%20dengan%20rafli.familymart.%20Mohon%20informasi%20lebih%20lanjut%20terkait%20proses%20dan%20persyaratan.%20Terima%20kasih">
            <button className="bg-[#F6AE00] text-white rounded-xl py-3 lg:py-4 px-9 lg:px-12">
              Bergabung mitra
            </button>
          </Link>
        </div>
        <div className="col-span-12 lg:col-span-7 text-center lg:text-left my-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <div className="relative w-full aspect-video">
                <Image
                  src="/assets/image/logo/logo-rafyangar.png"
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
                  src="/assets/image/logo/logo-ulasan-pendidikan.png"
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