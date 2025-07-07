// import React from 'react';
// import MasterLayout from '../layouts/MasterLayouts';
// import { Head } from '@inertiajs/react';
// import HeroSection from '@/components/HeroSection';

// export default function Home() {

//     return (
//         <>
//             <Head title="Home" />
//             <MasterLayout>
//                 <section className='bg-gradient-to-b from-primary-950 from-10% via-purple-900 via-50% to-purple-800 to-90% bg-blend-hard-light h-[100vh]'>
//                     <div className='pt-10'>
//                         <img src="images/Logo.svg" alt="" className='h-[28px] mx-auto' />
//                     </div>
//                     <h1 className='font-instrument-sans text-white text-center pt-[200px]'>
//                         Hello, Blutizen! 🤚🏻
//                     </h1>
//                     <h1 className='font-instrument-sans text-white text-center pt-[200px]'>
//                         Hello, Tech Enthusiast!
//                     </h1>
//                     <h1 className='font-instrument-sans text-white text-center pt-[200px]'>
//                         Welcome, Maba UBL 2025!
//                     </h1>
//                     <HeroSection />
//                 </section>
//             </MasterLayout>
//         </>
//     );
// }


import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Head } from "@inertiajs/react";
import MasterLayout from "@/layouts/MasterLayouts";
import HeroSection from "@/components/HeroSection";

const MainComponent = () => {
    return (
        <>
            <Head title="Home" />
            <MasterLayout>
                <HeroSection />
                {/* <StoriesSection /> */}
            </MasterLayout>
        </>
    );
};

const Home = () => {
    const preloaderRef = useRef(null);
    const logoRef = useRef(null);
    const textBlutizenRef = useRef(null);
    const textTechRef = useRef(null);
    const textMabaRef = useRef(null);
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(preloaderRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => setShowMain(true),
                });
            },
        });

        // Alur animasi dimulai langsung dari logo ke teks Blutizen
        tl
            // Logo muncul
            .from(logoRef.current, { y: 100, opacity: 0, duration: 0.8, ease: "power2.out" })
            // Logo menghilang
            .to(logoRef.current, { y: -100, opacity: 0, duration: 0.8, delay: 0.5, ease: "power2.in" })

            // Animasi "Eskrim" telah dihapus dari sini

            // "Hello, Blutizen!" muncul
            .fromTo(textBlutizenRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" })
            // "Hello, Blutizen!" menghilang
            .to(textBlutizenRef.current, { y: -100, opacity: 0, duration: 0.8, delay: 1.5, ease: "power2.in" })

            // "Hello, Tech Enthusiast!" muncul
            .fromTo(textTechRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" })
            // "Hello, Tech Enthusiast!" menghilang
            .to(textTechRef.current, { y: -100, opacity: 0, duration: 0.8, delay: 1.5, ease: "power2.in" })

            // "Welcome, Maba UBL 2025!" muncul
            .fromTo(textMabaRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" })
            // Tahan pesan terakhir sejenak sebelum seluruh preloader menghilang
            .to(textMabaRef.current, { delay: 2 });

    }, []);

    if (showMain) {
        return <MainComponent />;
    }

    return (
        <div
            ref={preloaderRef}
            className="h-screen w-full flex justify-center items-center bg-gray-900 text-white overflow-hidden bg-gradient-to-b from-primary-950 from-10% via-purple-900 via-50% to-purple-800 to-90% bg-blend-hard-light"
        >
            {/* Elemen-elemen yang akan dianimasikan */}
            <img ref={logoRef} src="/images/Logo.svg" alt="Brand Logo" className="h-[90px]" />

            <h1 ref={textBlutizenRef} className='font-instrument-sans text-4xl md:text-6xl text-white text-center absolute opacity-0'>
                Hello, Blutizen! 🤚🏻
            </h1>
            <h1 ref={textTechRef} className='font-instrument-sans text-4xl md:text-6xl text-white text-center absolute opacity-0'>
                Hello, Tech Enthusiast!
            </h1>
            <h1 ref={textMabaRef} className='font-instrument-sans text-4xl md:text-6xl text-white text-center absolute opacity-0'>
                Welcome, Maba UBL 2025!
            </h1>
        </div>
    );
};

export default Home;
