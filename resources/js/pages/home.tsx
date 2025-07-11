import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Head } from "@inertiajs/react";
import MasterLayout from "@/layouts/MasterLayouts";
import HeroSection from "@/components/HeroSection";
import StoriesSection from "@/components/StoriesSection";

const MainComponent = () => {
    return (
        <>
            <Head title="Home">
                <style>{`
                    html {
                        scroll-behavior: smooth;
                    }
                `}</style>
            </Head>
            <MasterLayout>
                {/* className="w-full text-white overflow-hidden bg-gradient-to-b from-primary-950 from-10% via-purple-900 via-50% to-purple-800 to-90% bg-blend-hard-light p-4" */}

                {/* className="w-full text-white overflow-hidden bg-[linear-gradient(to_bottom,_#080126_10%,_#3AF8F8_35%,_#3b0764_50%,_#581c87_90%)] bg-blend-hard-light p-4"
                */}
                <div className="w-full text-white overflow-hidden bg-[linear-gradient(to_bottom,_#07070c_10%,_#21184e_35%,_#312475_50%,_#3af8f8_90%)] bg-blend-hard-light p-4">
                    <HeroSection />
                    <StoriesSection />
                </div>
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
                // The original animation had a bug where it would slide up then down.
                // This is corrected to slide out of view and then show the main component.
                gsap.to(preloaderRef.current, {
                    duration: 1,
                    y: "-100%", // Slide up and out
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
            .to(logoRef.current, { opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.8"); // Fades out logo at the end

    }, []);

    if (showMain) {
        return <MainComponent />;
    }

    return (
        <div
            ref={preloaderRef}
            className="h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden bg-gradient-to-b from-primary-950 from-10% via-purple-900 via-50% to-purple-800 to-90% bg-blend-hard-light relative"
        >
            <img ref={logoRef} src="images/logo.svg" alt="logo" className="h-[28px] md:h-[32px] lg:h-[36px] xl:h-[60px] absolute top-10 left-1/2 transform -translate-x-1/2" />
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
