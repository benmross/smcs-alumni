import Link from "next/link";

export default function HeroSection({ type }: { type: "donate" | "home" | "ledger" }) {
    return (
      <div>
        {type === "donate" ? (
          <div className="relative flex flex-col space-y-6 items-center px-4 sm:px-8 lg:px-44 py-16 lg:py-24 bg-gradient-to-br from-[#232323] via-gray-900 to-black text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff3131]/10 to-transparent"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">Donate</h1>
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">Thank you to all of our donors for supporting the students in SMCS at Poolesville High School!</p>
            </div>
          </div>
        ) : type === "ledger" ? (
          <div className="relative flex flex-col space-y-6 items-center px-4 sm:px-8 lg:px-44 py-16 lg:py-24 bg-gradient-to-br from-[#232323] via-gray-900 to-black text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#ff3131]/10 to-transparent"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">Public <span className="text-[#ff3131]">Ledger</span></h1>
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">Complete transparency of all donations and expenses for the SMCS Alumni Collective.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link href="https://hcb.hackclub.com/smcs-alumni-collective/transactions" target="_blank" rel="noopener noreferrer">
                  <p className="inline-flex items-center rounded-lg text-white font-bold bg-[#ff3131] px-6 py-3 text-lg lg:text-xl transition duration-300 hover:scale-105 hover:bg-[#e02828]">
                    View Live Data
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col space-y-6 items-center px-4 sm:px-8 lg:px-44 py-16 lg:py-24 bg-gradient-to-br from-[#232323] via-gray-900 to-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-[#ff3131]/20 via-transparent to-transparent"></div>
            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">SMCS <span className="text-[#ff3131]">Alumni</span> Collective</h1>
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">Supporting the students of the Science, Mathematics, and Computer Science (SMCS) program at Poolesville High School.</p>
              <Link href="/donate">
                <p className="inline-flex items-center rounded-lg text-white font-bold bg-[#ff3131] px-6 py-3 text-lg lg:text-2xl transition duration-300 hover:scale-105 hover:bg-[#e02828]">
                  Donate Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }