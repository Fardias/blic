import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const LOGO_IMAGE_PATH = '/images/Logo.svg'; 

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#stories', label: 'Stories' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        // Wrapper utama. md:hidden akan menyembunyikan komponen ini di layar medium dan lebih besar
        <header className="md:hidden">
            {/* Navbar Bar (tampilan tertutup) */}
            <div className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm shadow-md h-20 px-4 flex justify-between items-center z-50">
                <a href="#home">
                    {/* Logo menggunakan tag <img> */}
                    <img 
                        src={LOGO_IMAGE_PATH} 
                        alt="Budi Luhur IT Club Logo" 
                        className="h-9" // Sesuaikan tinggi logo jika perlu
                    />
                </a>
                <button 
                    onClick={toggleMenu} 
                    aria-label="Open menu" 
                    className="p-2 text-white"
                >
                    <Menu className="h-8 w-8" />
                </button>
            </div>

            {/* Menu Overlay (tampilan terbuka) */}
            {isOpen && (
                <div className="fixed inset-0 bg-black z-50 flex flex-col">
                    {/* Header di dalam Overlay */}
                    <div className="h-20 px-4 flex justify-between items-center">
                        <a href="#home" onClick={toggleMenu}>
                             <img 
                                src={LOGO_IMAGE_PATH} 
                                alt="Budi Luhur IT Club Logo" 
                                className="h-9"
                            />
                        </a>
                        <button 
                            onClick={toggleMenu} 
                            aria-label="Close menu" 
                            className="p-2 text-white"
                        >
                            <X className="h-8 w-8" />
                        </button>
                    </div>

                    {/* Daftar Link Navigasi */}
                    <nav className="flex-grow flex flex-col justify-center items-center">
                        <ul className="flex flex-col items-center gap-y-10">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a 
                                        href={link.href} 
                                        onClick={toggleMenu} // Menutup menu saat link diklik
                                        className="text-4xl text-gray-300 hover:text-white transition-colors font-crimson-pro"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;