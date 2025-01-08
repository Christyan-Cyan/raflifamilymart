"use client"

import Link from "next/link";
import { useState } from "react";

import { FaArrowsRotate } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function CardCategory ({image, title, details}) {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    if (!isFlipped) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }
  }
  return (
    <>
      <div
        className='min-h-full perspective-1000 w-full h-96 cursor-pointer'
        onClick={handleClick}
      >
        <div className={`relative w-full h-full transition-transform duration-300 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden rounded-xl">
            <div
              className="relative flex h-full bg-cover bg-no-repeat rounded-xl p-6"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-35 rounded-xl"></div>
              <div className="relative flex flex-col justify-between w-full h-full">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold max-w-32">{title}</h2>
                  <div className="text-lg ml-auto">
                    <FaArrowsRotate />
                  </div>
                </div>
                <Link className="flex flex-row gap-2 text-sm mt-auto" href="">
                  Read More
                  <IoArrowForwardCircleOutline className="text-lg my-auto" />
                </Link>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="bg-[#161A22] text-white absolute w-full h-full backface-hidden rounded-xl rotate-y-180">
            <div className="relative flex h-full object-cover rounded-xl p-6">
              <div className="relative flex flex-col justify-between w-full h-full">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold max-w-32">{title}</h2>
                  <div className="text-lg ml-auto">
                    <FaArrowsRotate />
                  </div>
                </div>
                <p className="text-sm font-extralight my-auto">{details}</p>
                <Link className="flex flex-row gap-2 text-sm mt-auto" href="">
                  Read More
                  <IoArrowForwardCircleOutline className="text-lg my-auto" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}