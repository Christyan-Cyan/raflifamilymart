"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Form from "next/form";

import { SiInstagram, SiFacebook, SiTiktok, SiShopee, SiWhatsapp, SiYoutube } from "react-icons/si";
import { PiPaperPlaneRightFill } from "react-icons/pi";

const socialLinksFooter = [
  { icon: <SiInstagram />, url: "https://www.instagram.com/el_adzani/"},
  { icon: <SiTiktok />, url: "https://www.tiktok.com/@rafli.familymart" },
  { icon: <SiFacebook />, url: "https://www.facebook.com/el.adzani" },
  { icon: <SiWhatsapp />, url: "https://wa.me/6287887488113?text=Halo%20Rafli%20Family%20Mart!%20Saya%20ingin%20bertanya%20mengenai%20produk%20dan%20layanan%20yang%20tersedia" },
  { icon: <SiShopee />, url: "https://collshp.com/ahmadrafli" }
]

const navigation = [
  { label: 'Tentang Kami', link: '#about-us' },
  { label: 'Kategori Produk', link: '#product-categories' },
  { label: 'Tujuan Kami', link: '#goals' },
  { label: 'Testimoni', link: '#testimonials' },
]

const help = [
  { label: 'Online support', link: '/' },
  { label: 'Help & FAQ', link: '#faq' },
  { label: 'Partnership', link: '#partnership' },
  { label: 'Kontak Kami', link: '#contact-us' },
]

const Footer = () => {
  const [message, setMessage] = useState("");
  const subject = "Tanya mas el kuy"

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:raflifamilymart@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  }

  return (
    <footer className='bg-[#161A22] py-8 px-4 md:px-8 lg:px-16'>

      <div className="flex flex-col lg:flex-row gap-12 mt-0">

        <div className="flex flex-row">
          <div className="flex flex-col">
            <Link className="flex flex-row gap-4" href="/">
              <div>
                <Image
                  src="/assets/image/logo/logo-rfm.png"
                  width={630}
                  height={569}
                  alt="Logo RafliFamily Mart"
                  className="w-full h-16"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-1">RAFLI.FAMILYMART</h1>
                <p className="max-w-48 md:max-w-none text-xs font-light">Kemudahan Belanja, Kenyamanan Keluarga</p>
              </div>
            </Link>
            <div className="max-w-sm mt-4">
              <p className="text-lg font-extralight max-w-xl">Temukan beragam produk kebutuhan terbaik untuk keluarga Anda.</p>
              <div className="flex flex-row gap-2 mt-4">
                {socialLinksFooter.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    className="bg-transparent text-white border-2 border-white hover:text-[#F6AE00] hover:border-[#F6AE00] rounded-full p-4"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-12 lg:ml-auto">

          <div className="flex flex-col lg:ml-auto">
            <h1 className='text-lg md:text-xl font-bold uppercase mb-3 lg:mb-5'>Navigasi</h1>
            <div className="flex flex-col gap-3">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-base text-white hover:text-[#F6AE00]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className='text-lg md:text-xl font-bold uppercase mb-3 lg:mb-5'>Bantuan</h1>
            <div className="flex flex-col gap-3">
              {help.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-base text-white hover:text-[#F6AE00]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="flex flex-col">
          <h1 className='text-lg md:text-xl font-bold uppercase mb-3 lg:mb-5'>Hubungi via email</h1>
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-row">
              <input
                type="text"
                name="message"
                placeholder="Ajukan pertanyaan anda disini"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#33373F] rounded-lg border border-[#576178] w-full py-2 px-4"
              />
              <button
                className="bg-[#F6AE00] text-white rounded-lg ml-2 p-3"
                type="submit"
              >
                <PiPaperPlaneRightFill />
              </button>
            </div>
          </Form>
        </div>
      </div>

      <div className='border border-[#5a5a5a] my-4'></div>
      <div className='flex flex-col lg:flex-row text-sm'>
        <p className='text-center lg:text-left my-auto'>Copyright © 2025 Rafli.FamilyMart</p>
        <div className='flex flex-row gap-3 m-auto lg:m-0 lg:ml-auto mt-4 lg:mt-0'>
          <Link className="text-white hover:text-[#F6AE00]" href="">
            Syarat dan ketentuan
          </Link>
          <span>|</span>
          <Link className="text-white hover:text-[#F6AE00]" href="">
            Kebijakan privasi
          </Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer