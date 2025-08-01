'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 hover:text-[#ff3131] transition-colors duration-300"
                        >
                            <span className="hidden sm:inline">SMCS Alumni Collective</span>
                            <span className="sm:hidden">SMCS Alumni</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        <Link
                            href="/"
                            className="relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-[#ff3131] transition-all duration-300 group"
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff3131] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="/ledger"
                            className="relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-[#ff3131] transition-all duration-300 group"
                        >
                            Public Ledger
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff3131] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="https://hcb.hackclub.com/reimbursement/start/smcs-alumni-collective"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-[#ff3131] transition-all duration-300 group"
                        >
                            Request Reimbursement
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff3131] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="/donate"
                            className="ml-4 inline-flex items-center px-4 lg:px-6 py-2 text-sm lg:text-base font-semibold text-white bg-gradient-to-r from-[#ff3131] to-[#e02828] rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:from-[#e02828] hover:to-[#ff3131]"
                        >
                            Donate Now
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#ff3131] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ff3131] transition-colors duration-300"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                    <Link
                        href="/"
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ff3131] hover:bg-red-50 rounded-md transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/ledger"
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ff3131] hover:bg-red-50 rounded-md transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Public Ledger
                    </Link>
                    <Link
                        href="https://hcb.hackclub.com/reimbursement/start/smcs-alumni-collective"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ff3131] hover:bg-red-50 rounded-md transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Request Reimbursement
                    </Link>
                    <Link
                        href="/donate"
                        className="block mx-3 mt-4 px-4 py-3 text-base font-semibold text-center text-white bg-gradient-to-r from-[#ff3131] to-[#e02828] rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Donate Now
                    </Link>
                </div>
            </div>
        </header>
    );
}
