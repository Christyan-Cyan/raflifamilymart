import CardTestimonial from "@/components/CardTestimonial";

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="px-4 md:px-8 lg:px-16 mt-96 lg:mt-64 scroll-mt-24 lg:scroll-mt-64"
      >
      <div className="text-center">
        <span className="text-xs md:text-base text-[#F6AE00] font-bold uppercase tracking-[.25em]">Testimonial</span>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-8 mt-3">Review dan Testimoni Pelanggan Kami</h1>
      </div>
      <div className="grid grid-cols-12 gap-8 mt-12">
        <div className="col-span-12 lg:col-span-4">
          <CardTestimonial />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <CardTestimonial />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <CardTestimonial />
        </div>
      </div>
    </section>
  )
}

export default Testimonial;