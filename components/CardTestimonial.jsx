import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  return (
    <div className="flex flex-row gap-2 text-sm ml-auto my-auto">
      {[...Array(rating)].map((_, index) => (
        <FaStar key={index} className="text-[#F6AE00]" />
      ))}
      {[...Array(5 - rating)].map((_, index) => (
        <FaRegStar key={index} className="text-[#F6AE00]" />
      ))}
    </div>
  )
}

const CardTestimonial = ({ name, review, rating }) => {
  return (
    <>
      <div className="relative bg-[#161A22] rounded-2xl w-full min-h-full flex flex-col p-8">
        <div className="relative min-h-[200px]">
          <p className="text-justify text-sm flex-grow">{review}</p>
        </div>

        <div className="flex flex-row mt-4 gap-2 items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/assets/image/person.jpg"
              width={64}
              height={64}
              alt="Testimonial user"
              className="max-w-10 rounded-full"
            />
            <h1 className="text-medium text-sm ml-4">{name}</h1>
          </div>
          <Rating rating={rating} />
        </div>
      </div>
    </>
  )
}

export default CardTestimonial;