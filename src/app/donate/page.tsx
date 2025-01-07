import Finances from "@/components/Finances";
import Link from "next/link";
import Image from "next/image";

export default function Donate() {
    return (
        <div>
            <div className="flex flex-col space-y-6 items-center px-44 py-24 bg-[#232323] text-white">
                <p className="text-7xl font-bold text-center">Donate to <span className="text-[#ff3131]">SMCS</span> Alumni</p>
                <p className="text-2xl text-center">Your support aids the students of the SMCS program at Poolesville High School.</p>
            </div>
            <div className="flex flex-col space-y-6 items-center px-44 py-24 bg-black text-white">
                <p className="text-7xl text-white font-bold pt-5">Ways to Donate</p>
                <div className="flex flex-row">
                    <div className="flex flex-col items-center px-20">
                        <Link
                            href="https://www.google.com/maps/place/8605+Santa+Monica+Blvd,+West+Hollywood,+CA+90069/@34.0880523,-118.3821239,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2bebb02602b33:0x60072fd68413ee3c!8m2!3d34.0880523!4d-118.379549!16s%2Fg%2F11c2fk1tkn?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
                            className="rounded-full bg-[#ff3131] p-2 px-8 flex w-28 h-28 items-center justify-center">
                            <Image
                                width={100}
                                height={100}
                                src="/wire.png"
                                alt="Wire money address"
                            />
                        </Link>
                        <p className="text-4xl font-bold text-center pt-2">Wire money</p>
                    </div>
                    <div className="flex flex-col items-center px-20">
                        <Link
                            href="https://hcb.hackclub.com/donations/start/smcs-alumni-collective"
                            className="rounded-full bg-[#ff3131] p-2 px-8 flex w-28 h-28 items-center justify-center">
                            <Image
                                width={100}
                                height={100}
                                src="/mail.png"
                                alt="Donation widget"
                            />
                        </Link>
                        <p className="text-4xl font-bold text-center pt-2">Donation Widget</p>
                    </div>
                    <div className="flex flex-col items-center px-20">
                        <Link
                            href="/"
                            className="rounded-full bg-[#ff3131] p-2 px-8 flex w-28 h-28 items-center justify-center">
                            <Image
                                width={100}
                                height={100}
                                src="/mail.png"
                                alt="Mail to "
                            />
                        </Link>
                        <p className="text-4xl font-bold text-center pt-2">Mail</p>
                    </div>
                </div>
            </div>
            <Finances/>
            {/* <iframe className="border-none w-[50%] h-screen" src="https://hcb.hackclub.com/donations/start/smcs-alumni-collective" name="donateFrame" /> */}
        </div>
    );
}