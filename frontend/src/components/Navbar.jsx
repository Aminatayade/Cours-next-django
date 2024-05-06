import { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ isAuthenticated }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 text-white bg-gray-500 items-centerflex ">
            <div className="flex items-center justify-between">
                <div className="logo">
                    <Link href="/" legacyBehavior>
                        <a className="text-xl font-bold">Gestion de Réservation de salles</a>
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                {isAuthenticated ? (
                    <>
                        <Link href="/" legacyBehavior><a className="block px-4 py-2 md:inline-block">Accueil</a></Link>
                        <Link href="/reservations" legacyBehavior><a className="block px-4 py-2 md:inline-block">Réservation</a></Link>
                    </>
                ) : (
                    <>
                        <Link href="/login" legacyBehavior><a className="block px-4 py-2 md:inline-block">Login</a></Link>
                        <Link href="/register" legacyBehavior><a className="block px-4 py-2 md:inline-block">Register</a></Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
