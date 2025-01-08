"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="bg-[#161A22] rounded-xl mb-4">
          <button
            className="flex w-full justify-between py-4 px-5 text-left"
            onClick={() => handleAccordionClick(index)}
          >
            <span className="my-auto">{item.question}</span>
            <div className="bg-[#23262D] text-[#F6AE00] rounded-full p-2">
              <IoIosArrowForward
                className={`h-5 w-5 transition-transform duration-200 ${
                  activeIndex === index ? "rotate-90" : ""
                }`}
              />
            </div>
          </button>
          {activeIndex === index && (
            <div className="font-extralight p-5">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}