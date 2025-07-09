import React from 'react'

const StoriesSection = () => {
  return (
    <section className="py-20 px-4 flex flex-col items-center justify-center">
      <div className="container mx-auto text-center">


        <h2 className="font-instrument-sans text-4xl md:text-5xl text-white">
          Our <br />
          <span className="font-instrument-sans">Featured Stories</span>
        </h2>
        <p className="mt-4 text-gray-300">
          Are you interested in starting your story in technology with us?
        </p>

       <div className="mt-12 max-w-4xl mx-auto">
          <a
            href="#"
            className="block relative rounded-2xl overflow-hidden shadow-2xl group transition-transform duration-300 ease-in-out hover:scale-105"
          >
            {/* 1. Gambar Latar Belakang */}
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" // GANTI DENGAN PATH GAMBAR ANDA
              alt="Workshop participants learning about cyber security"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* 2. Overlay Gradien untuk Keterbacaan Teks */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* 3. Konten Teks di atas Overlay */}
            <div className="relative p-6 md:p-8 flex flex-col justify-end h-[450px] text-left text-white">
              <div>
                <span className="text-sm font-semibold text-gray-200">
                  Workshop Partner
                </span>
                <h3 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
                  Learn Kali Linux for <br/> Cyber Security
                </h3>
                <p className="mt-4 text-xs md:text-sm text-gray-400">
                  22 Jun 2024 by BEM FTI UBL, BLIC Cyber Security Division
                </p>
              </div>
            </div>
          </a>
        </div>
        
      </div>
    </section>
  )
}

export default StoriesSection;