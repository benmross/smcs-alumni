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
                    <Link className="flex flex-col items-center px-10 py-10 bg-[#232323] rounded-3xl transition duration-300 hover:scale-110"
                        href="https://www.google.com/maps/place/8605+Santa+Monica+Blvd,+West+Hollywood,+CA+90069/@34.0880523,-118.3821239,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2bebb02602b33:0x60072fd68413ee3c!8m2!3d34.0880523!4d-118.379549!16s%2Fg%2F11c2fk1tkn?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
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
                    </Link>
                    <Link className="flex flex-col items-center px-10 py-10 bg-[#232323] rounded-3xl transition duration-300 hover:scale-110"
                        href="https://hcb.hackclub.com/donations/start/smcs-alumni-collective"
                    >
                        <div className="rounded-full bg-[#ff3131] p-2 px-8 flex w-28 h-28 items-center justify-center">
                            <Image
                                width={100}
                                height={100}
                                src="/mail.png"
                                alt="Donation widget"
                            />
                        </div>
                        <p className="text-4xl font-bold text-center pt-2">Donate Online</p>
                    </Link>
                    <Link className="flex flex-col items-center px-10 py-10 bg-[#232323] rounded-3xl transition duration-300 hover:scale-110"
                        href="/"
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
                    </Link>
                </div>
            </div>
            <Finances />
            <iframe className="border-none w-[100%] h-screen" src="https://hcb.hackclub.com/donations/start/smcs-alumni-collective" name="donateFrame" />
        </div>
    );
}