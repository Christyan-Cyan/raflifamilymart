import CardCategory from "@/components/CardCategory";

const ProductCategories = () => {
  return (
    <section
      id="product-categories"
      className="mt-36 px-4 md:px-8 lg:px-16 scroll-mt-24 lg:scroll-mt-64">
      <div className="max-w-3xl text-center mx-auto">
        <span className="text-xs md:text-base text-[#F6AE00] font-bold uppercase tracking-[.25em]">Product category</span>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-8 mt-3">Pilih Kategori Sesuai Kebutuhan Anda</h1>
        <p className="text-sm md:text-base font-light mb-8">
          Kami menyediakan berbagai produk berkualitas yang dirancang untuk memenuhi kebutuhan rumah tangga dan keluarga Anda.
          Temukan kategori yang sesuai dan lengkapi rumah Anda dengan pilihan terbaik dari Rafli.FamilyMart.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-1">
          <CardCategory title="Peralatan dapur" details="Temukan berbagai alat dapur praktis untuk membantu kegiatan memasak Anda menjadi lebih mudah dan menyenangkan." />
        </div>
        <div className="col-span-1">
          <CardCategory title="Peralatan dapur" details="Temukan berbagai alat dapur praktis untuk membantu kegiatan memasak Anda menjadi lebih mudah dan menyenangkan." />
        </div>
        <div className="col-span-1">
          <CardCategory title="Peralatan dapur" details="Temukan berbagai alat dapur praktis untuk membantu kegiatan memasak Anda menjadi lebih mudah dan menyenangkan." />
        </div>
        <div className="col-span-1">
          <CardCategory title="Peralatan dapur" details="Temukan berbagai alat dapur praktis untuk membantu kegiatan memasak Anda menjadi lebih mudah dan menyenangkan." />
        </div>
        <div className="col-span-1">
          <CardCategory title="Peralatan dapur" details="Temukan berbagai alat dapur praktis untuk membantu kegiatan memasak Anda menjadi lebih mudah dan menyenangkan." />
        </div>
      </div>
    </section>
  )
}

export default ProductCategories;