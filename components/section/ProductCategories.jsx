"use client"

import React from "react";
import Slider from "react-slick";
import CardCategory from "@/components/CardCategory";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const productCategories = [
  {
    image: "/assets/image/product-categories/product-category-1.png",
    title: "Peralatan Dapur",
    details: "Temukan berbagai alat dapur praktis untuk membantu kegiatan memasak Anda menjadi lebih mudah dan menyenangkan."
  },
  {
    image: "/assets/image/product-categories/product-category-2.png",
    title: "Dekorasi Rumah",
    details: "Hias rumah Anda dengan dekorasi cantik yang menambah kenyamanan dan keindahan setiap sudut ruangan."
  },
  {
    image: "/assets/image/product-categories/product-category-3.png",
    title: "Peralatan Kebersihan",
    details: "Pilihan alat kebersihan berkualitas untuk menjaga rumah anda tetap bersih dan rapi setiap saat."
  },
  {
    image: "/assets/image/product-categories/product-category-4.png",
    title: "Peralatan Anak dan Bayi",
    details: "Perlengkapan aman dan nyaman untuk mendukung tumbuh kembang anak dan kebutuhan bayi Anda."
  },
  {
    image: "/assets/image/product-categories/product-category-5.png",
    title: "Perlengkapan Kamar Mandi",
    details: "Lengkapi kamar mandi Anda dengan berbagai perlengkapan modern dan fungsional untuk kenyamanan maksimal."
  },
  {
    image: "/assets/image/product-categories/product-category-6.png",
    title: "Perabotan Rumah Tangga",
    details: "Pilihan perabotan praktis dan stylish yang cocok untuk melengkapi rumah Anda."
  },
  {
    image: "/assets/image/product-categories/product-category-7.png",
    title: "Alat Masak dan Baking",
    details: "Peralatan masak dan baking berkualitas untuk menciptakan hidangan lezat di rumah."
  },
  {
    image: "/assets/image/product-categories/product-category-8.png",
    title: "Elektronik Rumah Tangga",
    details: "Elektronik multifungsi untuk mempermudah pekerjaan rumah dan menunjang aktivitas sehari-hari."
  },
  {
    image: "/assets/image/product-categories/product-category-9.png",
    title: "Perlengkapan Rumah Tangga",
    details: "Beragam alat rumah tangga praktis yang membantu anda dalam menyelesaikan berbagai pekerjaan rumah."
  },
  {
    image: "/assets/image/product-categories/product-category-10.png",
    title: "Kesehatan dan Kecantikan",
    details: "Produk pilihan untuk menjaga kesehatan dan meningkatkan penampilan Anda setiap hari."
  }
]

export default function ProductCategories () {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
          cssEase: 'linear',
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
          cssEase: 'linear',
          arrows: false,
        }
      }
    ]
  }

  return (
    <section
      id="product-categories"
      className="mt-36 px-4 md:px-8 lg:px-16 scroll-mt-24 lg:scroll-mt-64">
      <div className="max-w-3xl text-center mx-auto">
        <span className="text-xs md:text-base text-[#F6AE00] font-bold uppercase tracking-[.25em]">Product category</span>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-8 mt-3">Pilih Kategori Sesuai Kebutuhan Anda</h1>
        <p className="text-sm md:text-base text-justify lg:text-center font-light mb-8">
          Kami menyediakan berbagai produk berkualitas yang dirancang untuk memenuhi kebutuhan rumah tangga dan keluarga Anda.
          Temukan kategori yang sesuai dan lengkapi rumah Anda dengan pilihan terbaik dari Rafli.FamilyMart.
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {productCategories.map((category, index) => (
            <div key={index} className="px-2">
              <CardCategory image={category.image} title={category.title} details={category.details} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}