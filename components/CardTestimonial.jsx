import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  return (
    <div className="flex flex-row gap-2 ml-auto my-auto">
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
      <div className="bg-[#161A22] rounded-2xl min-h-full p-8">
        <p className="text-justify text-sm">
          {review}
        </p>

        <div className="flex flex-row mt-6">
          <Image
            src="/assets/image/person.png"
            width={64}
            height={64}
            alt="Testimonial user"
            className="max-w-10"
          />
          <h1 className="text-medium text-sm ml-4 my-auto">{name}</h1>
          <Rating rating={rating} />
        </div>
      </div>
    </>
  )
}

export default CardTestimonial;