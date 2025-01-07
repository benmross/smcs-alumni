import Link from "next/link";

export default function HeroSection({ type }: { type: "donate" | "home" }) {
    return (
      <div>
        {type === "donate" ? (
          <div className="flex flex-col space-y-6 items-center px-44 py-24 bg-[#232323] text-white">
            <p className="text-7xl font-bold text-center">Donate</p>
            <p className="text-2xl text-center">Thank you to all of our donors for supporting the students in SMCS at Poolesville High School!</p>
          </div>
        ) : (
          <div className="flex flex-col space-y-6 items-center px-44 py-24 bg-[#232323] text-white">
            <p className="text-7xl font-bold text-center">SMCS <span className="text-[#ff3131]">Alumni</span> Collective</p>
            <p className="text-2xl text-center">Supporting the students of the Science, Mathematics, and Computer Science (SMCS) program at Poolesville High School.</p>
            <Link href="/donate">
              <p className="rounded-lg text-white font-bold bg-[#ff3131] p-2 px-8 text-2xl transition duration-300 hover:scale-105">
                Donate
              </p>
            </Link>
          </div>
        )}
      </div>
    );
  }