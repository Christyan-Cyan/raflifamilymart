import Accordion from "@/components/Accordion"

const dataFaq = [
  {
    question: 'Apa itu Rafli.FamilyMart?',
    answer: 'Rafli.FamilyMart adalah tempat yang tepat untuk memenuhi segala kebutuhan rumah tangga dan keluarga Anda. Temukan berbagai produk berkualitas, mulai dari peralatan dapur, dekorasi rumah, perlengkapan kebersihan, hingga perlengkapan sehari-hari yang membuat rumah Anda semakin nyaman. Kami menawarkan pilihan terbaik dengan harga terjangkau, siap melengkapi kebutuhan keluarga Anda. '
  },
  {
    question: 'Apakah semua produk di Rafli.FamilyMart aman untuk keluarga?',
    answer: 'Ya, kami selalu memastikan setiap produk yang kami sediakan telah melalui proses seleksi ketat. Produk-produk kami berasal dari merek terpercaya dan menggunakan bahan yang aman, sehingga cocok untuk digunakan oleh seluruh anggota keluarga, termasuk anak-anak.'
  },
  {
    question: 'Bagaimana cara memesan produk di Rafli.FamilyMart?',
    answer: 'Anda bisa memesan produk dengan mudah melalui platform Shopee kami. Cukup pilih produk yang diinginkan, tambahkan ke keranjang, dan ikuti langkah pembayaran. Kami siap membantu Anda kapan saja jika ada kendala dalam proses pemesanan.'
  },
  {
    question: 'Apa saja kategori produk yang tersedia di Rafli.FamilyMart?',
    answer: 'Kami menyediakan berbagai kategori produk, di antaranya, Peralatan Dapur, Dekorasi Rumah, Peralatan Kebersihan, Perlengkapan Anak dan Bayi, Perlengkapan Kamar Mandi, Perabotan Rumah Tangga, Alat Masak dan Baking, Elektronik Rumah Tangga, Produk Kesehatan dan Kecantikan'
  },
  {
    question: 'Apakah Rafli.FamilyMart menyediakan perlengkapan untuk ibu dan anak?',
    answer: 'Ya, kami memiliki kategori khusus yang menyediakan perlengkapan ibu dan anak. Mulai dari perlengkapan mandi bayi, mainan edukasi, hingga perlengkapan menyusui, semua tersedia untuk memastikan kenyamanan dan kebutuhan ibu dan si kecil terpenuhi.'
  },
  {
    question: 'Bagaimana cara menghubungi Rafli.FamilyMart untuk pertanyaan lebih lanjut?',
    answer: 'Anda bisa menghubungi kami langsung melalui WhatsApp di nomor +62 878-8748-8113. Kami siap menjawab pertanyaan dan memberikan informasi yang Anda butuhkan seputar produk dan layanan kami.'
  },
  {
    question: 'Apakah ada layanan pengembalian atau penukaran produk?',
    answer: 'Tidak, Rafli Family Mart tidak menyediakan layanan pengembalian atau penukaran produk secara langsung. Kami bekerja sama dengan berbagai seller, dan kebijakan pengembalian atau penukaran sepenuhnya bergantung pada ketentuan masing-masing seller. Jika Anda memiliki masalah dengan produk, kami sarankan untuk langsung menghubungi seller terkait.Tidak, Rafli Family Mart tidak menyediakan layanan pengembalian atau penukaran produk secara langsung. Kami bekerja sama dengan berbagai seller, dan kebijakan pengembalian atau penukaran sepenuhnya bergantung pada ketentuan masing-masing seller. Jika Anda memiliki masalah dengan produk, kami sarankan untuk langsung menghubungi seller terkait.'
  },
  {
    question: 'Apakah Rafli.FamilyMart memiliki toko fisik?',
    answer: 'Saat ini, Rafli Family Mart berfokus pada penjualan online untuk memudahkan pelanggan di berbagai lokasi. Namun, kami terus mengembangkan layanan dan tidak menutup kemungkinan untuk membuka toko fisik di masa mendatang.'
  },
  {
    question: 'Bagaimana cara menjadi mitra Rafli.FamilyMart?',
    answer: 'Jika Anda tertarik menjadi mitra atau menjalin kerja sama dengan Rafli Family Mart, silakan hubungi kami melalui WhatsApp atau email. Kami dengan senang hati akan membahas peluang kemitraan lebih lanjut.'
  },
  {
    question: 'Apakah Rafli.FamilyMart menawarkan promo khusus atau diskon?',
    answer: 'Ya, kami sering mengadakan promo dan diskon khusus pada waktu tertentu. Pastikan Anda mengikuti akun media sosial kami untuk mendapatkan informasi terbaru mengenai promo menarik dan penawaran spesial.'
  }
];

const FAQ = () => {
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