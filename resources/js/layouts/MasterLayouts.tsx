import React from 'react';
import { Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';

export default function MasterLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />

            <main className="">
                {children}
            </main>

            {/* <footer className="bg-gray-100 p-4 text-center">
                &copy; {new Date().getFullYear()} My App
            </footer> */}

        
        </div>
    );
}
