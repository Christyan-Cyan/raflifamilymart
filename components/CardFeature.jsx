const CardFeature = ({ icon, title, desc }) => {
  return (
    <>
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/20 border border-white/20 shadow-xl w-full min-h-full px-3 lg:px-6 py-5 lg:py-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-20"></div>
        <div className="relative text-center text-white z-10">
          <div className="inline-block bg-[#F6AE00] text-2xl rounded-full p-4 mb-2">
            {icon}
          </div>
          <h3 className="text-lg leading-6 font-semibold mb-2">{title}</h3>
          <p className="text-sm font-light">{desc}</p>
        </div>
      </div>
    </>
  )
}

export default CardFeature