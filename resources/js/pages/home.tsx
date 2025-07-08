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
                <div className="h-screen w-full text-white overflow-hidden bg-gradient-to-b from-primary-950 from-10% via-purple-900 via-50% to-purple-800 to-90% bg-blend-hard-light">
                    <HeroSection />
                </div>
                {/* <StoriesSection /> */}
            </MasterLayout>
        </>
    );
};

const Home = () => {
    const preloaderRef = useRef(null);
    // logoRef tidak digunakan, bisa dihapus jika tidak ada rencana lain
    const logoRef = useRef(null);
    const textBlutizenRef = useRef(null);
    const textTechRef = useRef(null);
    const textMabaRef = useRef(null);
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                // Sedikit penyesuaian agar ada fade out dari preloader sebelum main content muncul
                gsap.fromTo(preloaderRef.current, {
                    opacity: 1, // Fade out preloader
                    y: "100%"
                }, {
                    duration: 1,
                    opacity: 1,
                    y: "0%",
                    ease: "power2.inOut",
                    onComplete: () => setShowMain(true),
                });
            },
        });


        tl.fromTo(
            textBlutizenRef.current,
            { y: "100%", opacity: 1 },
            { y: "0%", opacity: 1, duration: 0.8, ease: "power2.out" }
        )
          .to(textBlutizenRef.current, { y: "-100%", opacity: 1, duration: 0.8, delay: 0.7, ease: "power2.in" })
          .fromTo(
            textTechRef.current,
            { y: "100%", opacity: 1 },
            { y: "0%", opacity: 1, duration: 0.8, ease: "power2.out" }
        )
          .to(textTechRef.current, { y: "-100%", opacity: 1, duration: 0.8, delay: 0.7, ease: "power2.in" })
          .fromTo(
            textMabaRef.current,
            { y: "100%", opacity: 1 },
            { y: "0%", opacity: 1, duration: 0.8, ease: "power2.out" }
        )
          .to(textMabaRef.current, { y: "-100%", opacity: 1, duration: 0.8, delay: 0.7, ease: "power2.in" })
          .fromTo(logoRef.current, {  opacity: 1 }, {  opacity: 0, duration: 0.8, ease: "power2.out" });

    }, []);

    if (showMain) {
        return <MainComponent />;
    }

    return (
        <div
            ref={preloaderRef}
            className="h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden bg-gradient-to-b from-primary-950 from-10% via-purple-900 via-50% to-purple-800 to-90% bg-blend-hard-light relative"
        >
            <img ref={logoRef}  src="images/logo.svg" alt="logo"className="h-[28px] md:h-[32px] lg:h-[36px] xl:h-[60px] absolute top-10 left-1/2 transform -translate-x-1/2" />
            <div className="relative h-[40px] md:h-[40px] lg:h-[43px] xl:h-[71px] w-full overflow-hidden flex justify-center items-center ">
                <h1 ref={textBlutizenRef} className='font-instrument-sans text-2xl md:text-3xl lg:text-4xl xl:text-7xl text-white text-center absolute w-full opacity-0'>
                    Hello, Blutizen! 🤚🏻
                </h1>
                <h1 ref={textTechRef} className='font-instrument-sans text-2xl md:text-3xl lg:text-4xl xl:text-7xl text-white text-center absolute w-full opacity-0'>
                    Hello, Tech Enthusiast!
                </h1>
                <h1 ref={textMabaRef} className='font-instrument-sans text-2xl md:text-3xl lg:text-4xl xl:text-7xl text-white text-center absolute w-full opacity-0'>
                    Welcome, Maba UBL 2025!
                </h1>
            </div>
        </div>
    );
};

export default Home;