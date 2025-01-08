"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiInstagram, SiFacebook, SiTiktok, SiShopee, SiWhatsapp } from "react-icons/si";
import { RiSearchLine, RiCustomerService2Fill, RiQuestionLine } from "react-icons/ri";
import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";

const socialLinks = [
  { icon: <SiInstagram />, link: "https://www.instagram.com/el_adzani/" },
  { icon: <SiFacebook />, link: "https://www.facebook.com/el.adzani" },
  { icon: <SiTiktok />, link: "https://www.tiktok.com/@rafli.familymart" },
  { icon: <SiShopee />, link: "https://collshp.com/ahmadrafli" },
  { icon: <SiWhatsapp />, link: "https://wa.me/6287887488113?text=Halo%20Rafli%20Family%20Mart!%20Saya%20ingin%20bertanya%20mengenai%20produk%20dan%20layanan%20yang%20tersedia" }
]

const navigation = [
  { label: "Beranda", link: "#home" },
  { label: "Tentang kami", link: "#about-us" },
  { label: "Kategori produk", link: "#product-categories" },
  { label: 'Goals', link: "#goals" },
  { label: "Partnership", link: "#partnership" },
  { label: "Kontak", link: "#contact-us" }
]

export default function Header({ secondaryFont }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isNavFixed, setNavFixed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let currentSection = ''
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        if (window.scrollY >= sectionTop - sectionHeight / 3 - 200) {
          currentSection = section.getAttribute('id')
        }
      })
      setActiveSection(currentSection || 'home')
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      <header
        className={`top-0 w-full z-50 mx-auto duration-300 px-4 md:px-8 lg:px-16 py-4 
        ${isNavFixed ? "fixed bg-[#23262D]" : "absolute bg-gradient-to-b from-[#1B1D22] to-transparent"}`}
      >
        <div className="hidden lg:flex flex-col border-b border-white border-opacity-20 pb-4">
          <div className="flex gap-6">
            {socialLinks.map((item, index) => (
              <Link className="flex-row text-xl my-auto hover:text-[#F6AE00]" key={index} href={item.link}>
                {item.icon}
              </Link>
            ))}
            <div className={`${secondaryFont} flex flex-row text-xs gap-12 ml-auto`}>
              <div className="flex-col">
                <p>Send us a message</p>
                <Link href="/" className="underline opacity-60 hover:opacity-100">rafli.familymart@gmail.com</Link>
              </div>
              <div className="flex-col">
                <p>Customer service</p>
                <Link href="/" className="underline opacity-60 hover:opacity-100">+62 878-8748-8113</Link>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <>
            <div
              className='fixed inset-0 z-40 bg-black opacity-70'
              onClick={toggleMenu}>
            </div>
            <div
              className={`fixed inset-0 z-50 bg-[#23262D] flex flex-col items-center justify-center rounded-xl transition-transform duration-300 m-4 md:m-8 ${
                isMenuOpen ? 'translate-y-0' : '-translate-y-full'
              }`}
            >
              <button
                className='absolute top-5 right-5 text-2xl text-white'
                onClick={toggleMenu}
              >
                <HiOutlineXMark />
              </button>

              <ul className='flex flex-col space-y-6 text-center'>
                {navigation.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className={`text-xl font-semibold ${
                        activeSection === item.link.slice(1)
                          ? 'text-[#F6AE00]' 
                          : 'text-white hover:text-[#F6AE00]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <nav className="flex flex-row lg:pt-4">
          <Link className="my-auto" href="/">
            <div className="flex flex-row gap-3">
              <div className="my-auto">
                <Image
                  src="/assets/image/logo/logo-rfm.png"
                  width={630}
                  height={569}
                  alt="Logo RafliFamily Mart"
                  className="w-full h-10"
                />
              </div>
              <div className="flex flex-col text-xs">
                <h1 className="text-xl font-bold mb-1">RAFLI.FAMILYMART</h1>
                <p className="max-w-48 md:max-w-none font-light">Kemudahan Belanja, Kenyamanan Keluarga</p>
              </div>
            </div>
          </Link>
          <div className="hidden lg:flex flex-row ml-auto my-auto">
            <ul className="flex space-x-4">
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`text-sm font-medium hover:text-[#F6AE00] 
                    ${activeSection === item.link.slice(1) ? 'text-[#F6AE00]' : 'text-white hover:text-[#F6AE00]'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="block lg:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="text-2xl bg-transparent border border-white rounded-lg p-2 lg:p-4"
            >
              <HiOutlineBars3BottomRight />
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}