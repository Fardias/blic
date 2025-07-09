import React from 'react'

const HeroSection = () => {
    return (
        <section className=" text-white min-h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto flex flex-col items-center text-center max-w-5xl">

                {/* Header dengan Logo */}
                <header className="flex items-center gap-x-3 mb-12">
                    <img src="images/logo.svg" alt="" className='h-8 md:h-10 lg:h-12 xl:h-16 hidden md:flex ' />
                </header>

                {/* Headline Utama */}
                <h1 className="font-instrument-sans max-w-[320px] md:max-w-[1500px] text-[25px] sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-snug">
                    Shaping Blutizen's tech
                    <span className="md:inline-flex items-center justify-center mt-3 group pt-3 hidden">
                        <img src="images/blic-logos.svg" alt="logo" className='h-12  md:h-10 lg:h-12 xl:h-[80px] hover:rotate-[0deg] rotate-[30deg] transition-all duration-500 cursor-pointer hover:scale-125 my-auto' />
                    </span>
                    <span className='pl-1'>Skills for competitions and industry</span>
                </h1>

                {/* Deskripsi */}
                <p className="font-crimson-pro mt-8 max-w-3xl text-md md:text-xl text-gray-300 leading-relaxed">
                    Budi Luhur IT Club is a community in the field of technology to develop the knowledge, interests, and talents of Budi Luhur University students so that they can compete in competitions and industry.
                </p>

                <div className='relative w-full h-24 flex flex-col items-center justify-center mt-[90px]'>
                    {/* The div below is now an 'a' tag linking to the stories section */}
                    <a href="#stories-section" className="absolute bottom-10 flex flex-col items-center gap-y-3 group cursor-pointer">
                        <span className="font-serif text-gray-400 group-hover:text-white transition-colors duration-300">
                            Scroll to Explore
                        </span>

                        <div className="relative w-px h-16 bg-gray-400/30 transition-colors duration-300 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[70%] bg-white animate-scroll-glow"></div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
