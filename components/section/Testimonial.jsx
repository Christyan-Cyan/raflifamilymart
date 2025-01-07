"use client"

import React from "react";
import Slider from "react-slick";
import CardTestimonial from "@/components/CardTestimonial";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          <div className="px-2 lg:px-8">
            <CardTestimonial />
          </div>
          <div className="px-2 lg:px-8">
            <CardTestimonial />
          </div>
          <div className="px-2 lg:px-8">
            <CardTestimonial />
          </div>
          <div className="px-2 lg:px-8">
            <CardTestimonial />
          </div>
          <div className="px-2 lg:px-8">
            <CardTestimonial />
          </div>
          <div className="px-2 lg:px-8">
            <CardTestimonial />
          </div>
        </Slider>
      </div>
    </section>
  )
}