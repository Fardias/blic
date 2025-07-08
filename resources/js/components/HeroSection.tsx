import React from 'react'

const HeroSection = () => {
  return (
    <section className=" text-white min-h-screen flex flex-col justify-center items-center p-4">
      <div className="container mx-auto flex flex-col items-center text-center max-w-5xl">

        {/* Header dengan Logo */}
        <header className="flex items-center gap-x-3 mb-12">
          <img src="images/logo.svg" alt="" className='h-8 md:h-10 lg:h-12 xl:h-16 hidden md:flex ' />

        </header>

        {/* Headline Utama */}
        <h1 className="font-instrument-sans text-[25px] sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-snug">
          Shaping Blutizen's tech
          {/* Wrapper untuk logo agar sejajar dengan teks */}
          <span className="inline-flex items-center justify-center mx-2 group pt-3">
            <img src="images/blic-logos.svg" alt="logo" className='h-12 md:h-10 lg:h-12 xl:h-[80px] hover:rotate-[0deg] rotate-[30deg] transition-all duration-500 cursor-pointer hover:scale-125 my-auto' />
          </span>
          Skills for competitions and industry
        </h1>

        {/* Deskripsi */}
        <p className="font-crimson-pro mt-8 max-w-3xl text-md md:text-xl text-gray-300 leading-relaxed">
          Budi Luhur IT Club is a community in the field of technology to develop the knowledge, interests, and talents of Budi Luhur University students so that they can compete in competitions and industry.
        </p>

        {/* Opsi: Scroll Down Prompt */}
        <div className="mt-24 text-gray-500 text-sm animate-pulse">
          Scroll Down
        </div>
      </div>
    </section>
  )
}

export default HeroSection