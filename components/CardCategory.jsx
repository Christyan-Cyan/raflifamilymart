"use client"

import Link from "next/link";
import { useState } from "react";

export default function CardCategory ({title, details}) {
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
      <div className='min-h-full perspective-1000 w-full h-[400px]'>
        <div className={`relative w-full h-full transition-transform duration-300 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden rounded-xl">
            <div
              className="relative flex h-full bg-cover bg-no-repeat rounded-xl p-6"
              style={{ backgroundImage: `url("/assets/image/product-category-1.png")` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-35 rounded-xl"></div>
              <div className="relative flex flex-col justify-between w-full h-full">
                <div className="flex items-center">
                  <h2 className="text-xl font-bold">{title}</h2>
                  <button onClick={handleClick} className="ml-auto">Click Me</button>
                </div>
                <Link className="mt-auto text-blue-500" href="">Read More</Link>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="bg-white text-black absolute w-full h-full backface-hidden rounded-xl rotate-y-180">
            <div className="relative flex h-full object-cover rounded-xl p-6">
              <div className="relative flex flex-col justify-between w-full h-full p-4">
                <div className="flex items-center">
                  <h2 className="text-xl font-bold">{title}</h2>
                  <button onClick={handleClick} className="ml-auto">Click Me</button>
                </div>
                <p className="my-auto text-gray-700">{details}</p>
                <Link className="mt-auto text-blue-500" href="">Read More</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}