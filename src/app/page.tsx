import HeroSection from "@/components/HeroSection";
import Content from "@/components/Content";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <div>
            <HeroSection type="home" />
            <div className="flex justify-between px-20">
                <div className="w-1/2 px-20">
                    <p className="text-6xl text-[#ff3130] font-bold pt-24 uppercase flex justify-center items-center">Connecting</p>
                    <p className="text-4xl text-center">the community of SMCS alumni together for networking.</p>
                </div>
                <div className="w-1/2 px-20">
                    <p className="text-6xl text-[#ff3130] font-bold pt-24 uppercase flex justify-center items-center">Fundraising</p>
                    <p className="text-4xl text-center">to support ongoing activities for the benefit of current SMCS students.</p>
                </div>
            </div>
            <Content/>
            <div className="flex flex-col items-center pb-10">
                <Link
                    href="/donate"
                    className="rounded-lg text-white font-bold bg-[#ff3131] p-2 px-8 text-2xl transition duration-300 hover:scale-105">
                    Donate
                </Link>
            </div>
        </div>

    </div>
  );
}
