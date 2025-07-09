import React from 'react'

const StoriesSection = () => {
    return (
        <section id="stories-section" className="py-20 px-4 flex flex-col items-center justify-center">
            <div className="container mx-auto text-center">

                <h2 className="font-instrument-sans text-4xl md:text-5xl text-white">
                    Our <br />
                    <span className="font-instrument-sans">Featured Stories</span>
                </h2>
                <p className="mt-4 text-gray-300">
                    Are you interested in starting your story in technology with us?
                </p>

                <div className="mt-12 max-w-4xl mx-auto rounded-3xl p-2 bg-gradient-to-b from-blue-700 to-cyan-400 shadow-2xl">
                    <a
                        href="#"
                        // class 'hover:scale-105' dan 'transition-transform' dihapus dari sini
                        className="block relative rounded-2xl overflow-hidden group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                            alt="Workshop participants learning about cyber security"
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:grayscale"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                        <div className="relative p-6 md:p-8 flex flex-col justify-end h-[450px] text-left text-white">
                            <div>
                                <span className="text-sm font-semibold text-gray-200">
                                    Workshop Partner
                                </span>
                                <h3 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
                                    Learn Kali Linux for <br /> Cyber Security
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
