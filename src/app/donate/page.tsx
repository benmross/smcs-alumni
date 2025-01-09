import Finances from "@/components/Finances";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Donate() {
    return (
        <div>
            <HeroSection type="donate" />
            <div className="flex flex-col space-y-6 items-center px-44 py-24 bg-black text-white">
                <p className="text-7xl text-white font-bold pt-5">Ways to Donate</p>
                <div className="flex flex-col xl:flex-row space-y-6 xl:space-y-0 xl:space-x-6">
                    <div className="flex flex-col items-center px-10 py-10"
                    >
                        <div className="rounded-full bg-[#ff3131] p-2 px-8 flex w-28 h-28 items-center justify-center">
                            <Image
                                width={100}
                                height={100}
                                src="/wire.png"
                                alt="Wire money address"
                            />
                        </div>
                        <p className="text-4xl font-bold text-center pt-2">Wire money</p>
                        <p className="text-2xl text-center pt-2">Routing Number: 121145307</p>
                        <p className="text-2xl text-center pt-2">Account Number: 670227804024806</p>
                    </div>
                    <Link className="flex flex-col items-center px-10 py-10"
                        href="https://hcb.hackclub.com/donations/start/smcs-alumni-collective"
                    >
                        <div className="rounded-full bg-[#ff3131] p-2 px-8 flex w-28 h-28 items-center justify-center">
                            <Image
                                width={100}
                                height={100}
                                src="/link.png"
                                alt="Donation widget"
                            />
                        </div>
                        <p className="text-4xl font-bold text-center pt-2">Donate Online</p>
                        <Link href="https://hcb.hackclub.com/donations/start/smcs-alumni-collective" className="text-2xl font-bold px-4 py-2 bg-[#ff3130] text-white rounded-lg transition duration-300 hover:scale-105">Link</Link>
                    </Link>
                    <div className="flex flex-col items-center px-10 py-10"
                    >
                        <div className="rounded-full bg-[#ff3131] p-2 px-8 flex w-28 h-28 items-center justify-center">
                            <Image
                                width={100}
                                height={100}
                                src="/mail.png"
                                alt="Mail to "
                            />
                        </div>
                        <p className="text-4xl font-bold text-center pt-2">Mail</p>
                        <p className="text-2xl text-center pt-2">Checks payable to: Hack Club ATTN: SMCS Alumni Collective</p>
                        <p className="text-2xl text-center pt-2">Mail check to: 8605 Santa Monica Blvd, Suite 86294 West Hollywood, CA 90069</p>
                    </div>
                </div>
            </div>
            <Finances />
            <iframe className="border-none w-[100%] h-screen" src="https://hcb.hackclub.com/donations/start/smcs-alumni-collective" name="donateFrame" />
        </div>
    );
}