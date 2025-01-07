"use client"

import { useState } from "react";

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
      <div className='min-h-full perspective-1000 w-full'>
        <div className={`relative w-full h-full transition-transform duration-300 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          <div className="absolute w-full h-full backface-hidden">
            <div className="bg-white flex items-center justify-center object-contain h-full" style={{ backgroundImage: `url(${image}` }}>
              <h2 className="text-2xl font-bold">{title}</h2>
              <button onClick={handleClick}>click me</button>
            </div>
          </div>
          <div className="bg-[#23262D] absolute w-full h-full backface-hidden rotate-y-180">
            <div className="flex items-center justify-center h-full p-4">
              <p>{details}</p>
              <button onClick={handleClick}>click me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}