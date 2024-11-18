'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-white font-bold border-b border-gray-200 px-10 py-4">
            <div className='flex justify-center items-center'>
                {/* <Image
                    src="/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                /> */}
                <Link
                    href="/"
                    className="text-xl"
                >
                    SMCS Alumni Collective
                </Link>
            </div>
            <div className='flex justify-center items-center space-x-4'>
                <Link
                    href="/"
                    className="rounded-lg p-2 px-4 text-xl transition duration-300 hover:text-[#444444]"
                >
                    Home
                </Link>
                <Link
                    href="/donate"
                    className="rounded-lg text-white bg-[#ff3131] p-2 px-8 text-xl transition duration-300 hover:scale-105"
                >
                    Donate
                </Link>
            </div>
        </header>
    );
}
