import React from 'react';
import MasterLayout from '../layouts/MasterLayouts';
import { Head } from '@inertiajs/react';
import HeroSection from '@/components/HeroSection';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <MasterLayout>
                <section className='bg-gradient-to-b from-primary-950 from-10% via-purple-900 via-50% to-purple-800 to-90% bg-blend-hard-light h-[100vh]'>
                    <div className='pt-10'>                    
                        <img src="images/Logo.svg" alt="" className='h-[28px] mx-auto' />
                    </div>
                    <h1 className='font-instrument-sans text-white text-center pt-[200px]'>
                        Hello, Blutizen! 🤚🏻
                    </h1>
                    <h1 className='font-instrument-sans text-white text-center pt-[200px]'>
                        Hello, Tech Enthusiast!
                    </h1>
                     <h1 className='font-instrument-sans text-white text-center pt-[200px]'>
                        Welcome, Maba UBL 2025!
                    </h1>
                    {/* <HeroSection /> */}
                </section>
            </MasterLayout>
        </>
    );
}
