"use client"

import React from "react";
import Slider from "react-slick";
import CardTestimonial from "@/components/CardTestimonial";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const userTestimonial = [
  {
    name: "Ahmad Rafli Al Adzani",
    review: "Belanja kebutuhan di Rafli.FamilyMart benar-benar memudahkan saya untuk memenuhi kebutuhan keluarga. Produknya lengkap, harganya terjangkau, dan kualitasnya tidak perlu diragukan lagi. Sekarang, saya bisa belanja dengan nyaman dari rumah tanpa harus repot keluar. Pelayanan pelanggannya juga sangat responsif dan ramah!",
    rating: 4
  },
  {
    name: "Christyan Anugerah Pamungkas",
    review: "Produk peralatan dan perlengkapan rumah dari Rafli.FamilyMart sangat bagus dan berkualitas. Saya bisa mudah mendapatkan barang yang saya butuhkan dengan harga yang terjangkau. Belanja di sini benar-benar memberikan saya sebuah pengalaman yang menyenangkan dan terpercaya! Keren banget deh pokoknya!",
    rating: 4,
  },
  {
    name: "Sri Handayani",
    review: "Rafli.FamilyMart adalah pilihan terbaik untuk kebutuhan rumah tangga saya. Saya bisa mencari berbagai barang elektronik dan perlengkapan rumah tangga dengan harga bersaing. Pengalaman belanja yang mudah dan lancar membuat saya terus kembali membeli disini lagi.",
    rating: 3,
  },
  {
    name: "Meilinda Rizkyanti Sari",
    review: "Saya sangat senang berbelanja di Rafli.Family Mart, Produk mainan, susu bayi dan perlengkapan anak-anak yang tersedia sangat membantu perkembangan si kecil. Pengirimannya cepat dan barang selalu sesuai dengan deskripsi. Saya merasa aman dan nyaman setiap belanja di sini. Recommended banget deh pokoknya!",
    rating: 3,
  },
  {
    name: "Wulan Eka Novita Sari",
    review: "Sebagai pekerja kantoran dengan waktu yang terbatas, Rafli.FamilyMart adalah solusi yang sempurna. Produk rumah tangga yang saya butuhkan selalu tersedia dan proses belanja online-nya sangat praktis. Ini membuat saya lebih hemat waktu dan tenaga! Terima kasih Rafli.FamilyMart, Sukses Terus!",
    rating: 4,
  },
  {
    name: "Haris Purwanto",
    review: "Saya sangat terkesan dengan pilihan produk di RafliFamily Mart. Semua barang yang saya beli selalu berkualitas dan sesuai harapan. Ditambah lagi, sering ada promo menarik yang membuat belanja jadi lebih hemat. Terima kasih Rafli.FamilyMart. Sukses dan Jaya selalu!",
    rating: 3,
  }
]

export default function Testimonial () {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: true,
          cssEase: 'linear',
          arrows: false,
        }
      }
    ]
  }

  return (
    <section
      id="testimonials"
      className="mt-36 px-4 md:px-8 lg:px-16 scroll-mt-24 lg:scroll-mt-64"
      >
      <div className="text-center">
        <span className="text-xs md:text-base text-[#F6AE00] font-bold uppercase tracking-[.25em]">Testimonial</span>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-8 mt-3">Review dan Testimoni Pelanggan Kami</h1>
      </div>

      <div className="slider-container mt-16">
        <Slider {...settings}>
          {userTestimonial.map((item, index) => (
            <div key={index} className="px-2">
              <CardTestimonial name={item.name} rating={item.rating} review={item.review} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}