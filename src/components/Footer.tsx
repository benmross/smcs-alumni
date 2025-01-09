import Link from 'next/link';
import Image from 'next/image';
import { FaPhoneAlt, FaRegEnvelope, FaInstagram } from 'react-icons/fa';

const LINKS = [
    ["Home", '/'],
    ["Donate", '/donate'],
    ["Announcements", '/#announcements'],
    ["Events", '/#events'],
    ["Contact Us", '/contact'],
];

export default function Footer() {
    return (
        <footer className="z-10 flex w-full justify-start bg-black text-white font-bold space-x-36 px-28 py-20 justify-between">
            <div className="flex space-x-60">
                <div className="flex flex-col space-y-3">
                    <p className="text-xl font-bold">SMCS Alumni Collective</p>
                    <p className="text-base text-[#6b6b78]">
                        Connect with us!
                    </p>
                    <div className="flex space-x-4 mt-2">
                        <Link href="" className="text-white text-2xl transition duration-300 hover:scale-110">
                            <FaRegEnvelope />
                        </Link>
                        <Link href="" className="text-white text-2xl transition duration-300 hover:scale-110">
                            <FaInstagram />
                        </Link>
                        <Link href="" className="text-white text-2xl transition duration-300 hover:scale-110">
                            <FaPhoneAlt />
                        </Link>
                    </div>
                </div>
                <ul className="space-y-2">
                    {LINKS.map((link) => (
                        <li key={link[0]}>
                            <Link
                                href={link[1]}
                                className="transition duration-300 hover:text-[#cccccc]"
                            >
                                {link[0]}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col space-y-4 items-center text-center md:items-start md:text-left">
                <Link
                    href={"https://forms.gle/DnHmue9kMT14guzV9"}
                    className="px-4 py-2 bg-[#ff3130] text-white rounded-lg transition duration-300 hover:scale-105"
                >
                    Join Our Mailing List!
                </Link>
            </div>
        </footer>
    );
}
