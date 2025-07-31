import HeroSection from "@/components/HeroSection";
import Content from "@/components/Content";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection type="home" />
        
        {/* Main Content Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Connecting Section */}
                    <div className="text-center lg:text-left space-y-6 group">
                        <div className="relative">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#ff3131] uppercase tracking-tight leading-tight">
                                Connecting
                            </h2>
                            <div className="absolute -bottom-2 left-1/2 lg:left-0 w-24 h-1 bg-gradient-to-r from-[#ff3131] to-[#e02828] transform -translate-x-1/2 lg:translate-x-0 transition-all duration-500 group-hover:w-32"></div>
                        </div>
                        <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            the community of SMCS alumni together for 
                            <span className="text-[#ff3131] font-semibold"> networking</span>.
                        </p>
                        <div className="pt-4">
                            <div className="inline-flex items-center space-x-2 text-gray-600">
                                <svg className="w-5 h-5 text-[#ff3131]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm lg:text-base">Building lasting professional relationships</span>
                            </div>
                        </div>
                    </div>

                    {/* Fundraising Section */}
                    <div className="text-center lg:text-left space-y-6 group">
                        <div className="relative">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#ff3131] uppercase tracking-tight leading-tight">
                                Fundraising
                            </h2>
                            <div className="absolute -bottom-2 left-1/2 lg:left-0 w-24 h-1 bg-gradient-to-r from-[#ff3131] to-[#e02828] transform -translate-x-1/2 lg:translate-x-0 transition-all duration-500 group-hover:w-32"></div>
                        </div>
                        <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            to support ongoing activities for the benefit of current 
                            <span className="text-[#ff3131] font-semibold"> SMCS students</span>.
                        </p>
                        <div className="pt-4">
                            <div className="inline-flex items-center space-x-2 text-gray-600">
                                <svg className="w-5 h-5 text-[#ff3131]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm lg:text-base">Empowering the next generation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Content Component */}
        <Content/>

        {/* Call to Action Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-r from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        Ready to make a difference?
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                        Join our community of SMCS alumni working together to support current students and build lasting connections.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/donate"
                            className="group relative inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#ff3131] to-[#e02828] rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:from-[#e02828] hover:to-[#ff3131] overflow-hidden"
                        >
                            <span className="relative z-10">Donate Now</span>
                            <svg className="relative z-10 ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#e02828] to-[#ff3131] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                        <Link
                            href="https://hcb.hackclub.com/smcs-alumni-collective/transactions"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#ff3131] bg-white border-2 border-[#ff3131] rounded-xl hover:bg-[#ff3131] hover:text-white transform transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            View Public Ledger
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-20 h-20 bg-[#ff3131]/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-8 right-8 w-32 h-32 bg-[#ff3131]/5 rounded-full blur-2xl"></div>
            </div>
        </section>
    </div>
  );
}
