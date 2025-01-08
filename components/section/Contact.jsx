import Image from "next/image";
import Link from "next/link";

const listContact = [
  {
    logo: "/assets/image/logo/logo-whatsapp.png",
    label: "Whatsapp",
    account: "+62 878 8748 8113",
    url: "https://wa.me/6287887488113?text=Halo%20Rafli%20Family%20Mart!%20Saya%20ingin%20bertanya%20mengenai%20produk%20dan%20layanan%20yang%20tersedia"
  },
  {
    logo: "/assets/image/logo/logo-instagram.png",
    label: "Instagram",
    account: "@el_adzani",
    url: "https://www.instagram.com/el_adzani/"
  },
  {
    logo: "/assets/image/logo/logo-tiktok.png",
    label: "Tiktok",
    account: "@rafli.familymart",
    url: "https://www.tiktok.com/@rafli.familymart"
  },
  {
    logo: "/assets/image/logo/logo-shopee.png",
    label: "Shopee",
    account: "Rafli.FamilyMart",
    url: "https://collshp.com/ahmadrafli"
  }
]

const Contact = () => {
  return (
    <section
      id="contact-us"
      className="mt-36 px-4 md:px-8 lg:px-16 scroll-mt-24 lg:scroll-mt-64"
      >
      <div className="text-center">
        <span className="text-xs md:text-base text-[#F6AE00] font-bold uppercase tracking-[.25em]">Our contact</span>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-8 mt-3">Informasi dan Kontak Kami</h1>
      </div>
      <div className="grid grid-cols-12 gap-4 lg:gap-12 mt-12">
        {listContact.map((contact, index) => (
          <div key={index} className="col-span-6 md:col-span-3 bg-[#161A22] text-center rounded-xl p-6">
            <Link href={contact.url}>
              <Image
                src={contact.logo}
                width={240}
                height={240}
                alt={`logo-${contact.label}`}
                className="mx-auto px-6 pb-4"
              />
              <h1 className="text-lg font-semibold">{contact.label}</h1>
              <span className="font-light">{contact.account}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact;