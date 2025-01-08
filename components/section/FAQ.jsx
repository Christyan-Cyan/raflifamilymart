import Accordion from "@/components/Accordion"

const FAQ = () => {
  const dataFaq = [
    { question: 'Apa itu Rafli.FamilyMart?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac congue dolor, at scelerisque massa. Aliquam erat volutpat. Phasellus ac mauris porttitor, condimentum nisl eget.' },
    { question: 'Apakah semua produk di Rafli.FamilyMart aman untuk keluarga?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac congue dolor, at scelerisque massa. Aliquam erat volutpat. Phasellus ac mauris porttitor, condimentum nisl eget.' },
    { question: 'Bagaimana cara memesan produk di Rafli.FamilyMart?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac congue dolor, at scelerisque massa. Aliquam erat volutpat. Phasellus ac mauris porttitor, condimentum nisl eget.' },
    { question: 'Apa saja kategori produk yang tersedia di Rafli.FamilyMart?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac congue dolor, at scelerisque massa. Aliquam erat volutpat. Phasellus ac mauris porttitor, condimentum nisl eget.' },
    { question: 'Apakah Rafli.FamilyMart menyediakan perlengkapan untuk ibu dan anak?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac congue dolor, at scelerisque massa. Aliquam erat volutpat. Phasellus ac mauris porttitor, condimentum nisl eget.' },
    { question: 'Bagaimana cara menghubungi Rafli.FamilyMart untuk pertanyaan lebih lanjut?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac congue dolor, at scelerisque massa. Aliquam erat volutpat. Phasellus ac mauris porttitor, condimentum nisl eget.' },
    { question: 'Apakah ada layanan pengembalian atau penukaran produk?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac congue dolor, at scelerisque massa. Aliquam erat volutpat. Phasellus ac mauris porttitor, condimentum nisl eget.' },
    { question: 'Apakah Rafli.FamilyMart memiliki toko fisik?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac congue dolor, at scelerisque massa. Aliquam erat volutpat. Phasellus ac mauris porttitor, condimentum nisl eget.' },
    { question: 'Bagaimana cara menjadi mitra Rafli.FamilyMart?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac congue dolor, at scelerisque massa. Aliquam erat volutpat. Phasellus ac mauris porttitor, condimentum nisl eget.' },
    { question: 'Apakah Rafli.FamilyMart menawarkan promo khusus atau diskon?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac congue dolor, at scelerisque massa. Aliquam erat volutpat. Phasellus ac mauris porttitor, condimentum nisl eget.' },
  ];
  return (
    <section
      id="faq"
      className="mt-36 px-4 md:px-8 lg:px-16 scroll-mt-24 lg:scroll-mt-64">
      <div className="max-w-3xl text-center mx-auto">
        <span className="text-xs md:text-base text-[#F6AE00] font-bold uppercase tracking-[.25em]">Help & FAQ</span>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-8 mt-3">Frequently Asked Questions</h1>
        <p className="text-sm md:text-base text-justify lg:text-center font-light mb-8">
          Apabila ada yang ingin anda tanyakan, jangan ragu-ragu untuk mengajukan pertanyaan.
        </p>
      </div>
      <div className="mb-24">
        <Accordion data={dataFaq} />
      </div>
    </section>
  )
}

export default FAQ;