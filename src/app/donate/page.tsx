import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Donate() {
    return (
        <div className="min-h-screen">
            <HeroSection type="donate" />
            
            {/* Ways to Donate Section */}
            <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff3131]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff3131]/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
                
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight">
                            Ways to <span className="text-[#ff3131]">Donate</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Choose your preferred method to support SMCS students and help build our alumni community.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
                        {/* Wire Transfer */}
                        <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-[#ff3131]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff3131]/20">
                            <div className="text-center space-y-6">
                                <div className="relative mx-auto">
                                    <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-r from-[#ff3131] to-[#e02828] p-1 mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                            <Image
                                                width={60}
                                                height={60}
                                                src="/wire.png"
                                                alt="Wire transfer"
                                                className="w-12 h-12 lg:w-14 lg:h-14"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#ff3131] rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white group-hover:text-[#ff3131] transition-colors duration-300">
                                    Wire Transfer
                                </h3>
                                
                                <div className="space-y-3 bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                                    <div className="text-sm text-gray-400 uppercase tracking-wide">Routing Number</div>
                                    <div className="text-lg lg:text-xl font-mono text-white">121145307</div>
                                    
                                    <div className="text-sm text-gray-400 uppercase tracking-wide pt-2">Account Number</div>
                                    <div className="text-lg lg:text-xl font-mono text-white break-all">670227804024806</div>
                                </div>
                                
                                <div className="pt-2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-300 border border-green-700/30">
                                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Secure & Direct
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Online Donation */}
                        <Link 
                            href="https://hcb.hackclub.com/donations/start/smcs-alumni-collective"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-gradient-to-br from-[#ff3131]/20 to-[#e02828]/20 backdrop-blur-sm border-2 border-[#ff3131]/50 rounded-2xl p-8 hover:border-[#ff3131] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff3131]/30 hover:scale-105"
                        >
                            <div className="text-center space-y-6">
                                <div className="relative mx-auto">
                                    <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-r from-[#ff3131] to-[#e02828] p-1 mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                            <Image
                                                width={60}
                                                height={60}
                                                src="/link.png"
                                                alt="Online donation"
                                                className="w-12 h-12 lg:w-14 lg:h-14"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#ff3131] rounded-full flex items-center justify-center animate-pulse">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white group-hover:text-[#ff3131] transition-colors duration-300">
                                    Donate Online
                                </h3>
                                
                                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                    Quick and secure online donations through Hack Club Bank
                                </p>
                                
                                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#ff3131] to-[#e02828] text-white font-bold rounded-lg group-hover:from-[#e02828] group-hover:to-[#ff3131] transition-all duration-300 group-hover:shadow-lg">
                                    Donate Now
                                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                                
                                <div className="pt-2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300 border border-blue-700/30">
                                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        Most Popular
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Mail Donation */}
                        <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-[#ff3131]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff3131]/20">
                            <div className="text-center space-y-6">
                                <div className="relative mx-auto">
                                    <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-r from-[#ff3131] to-[#e02828] p-1 mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                            <Image
                                                width={60}
                                                height={60}
                                                src="/mail.png"
                                                alt="Mail donation"
                                                className="w-12 h-12 lg:w-14 lg:h-14"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#ff3131] rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                        </svg>
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white group-hover:text-[#ff3131] transition-colors duration-300">
                                    Mail Check
                                </h3>
                                
                                <div className="space-y-4 bg-gray-800/30 rounded-lg p-4 border border-gray-700/30 text-left">
                                    <div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wide mb-1">Make Payable To</div>
                                        <div className="text-sm lg:text-base text-white font-medium">Hack Club</div>
                                        <div className="text-sm text-gray-300">ATTN: SMCS Alumni Collective</div>
                                    </div>
                                    
                                    <div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wide mb-1">Mail Address</div>
                                        <div className="text-sm lg:text-base text-white">
                                            8605 Santa Monica Blvd<br />
                                            Suite 86294<br />
                                            West Hollywood, CA 90069
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="pt-2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-900/30 text-purple-300 border border-purple-700/30">
                                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM9 9a1 1 0 012 0v4a1 1 0 11-2 0V9z" clipRule="evenodd" />
                                        </svg>
                                        Traditional
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Embedded Donation Form */}
            <section className="relative bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Quick Online Donation
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Use the form below to make a secure donation directly through Hack Club Bank.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
                        <iframe 
                            className="w-full h-screen border-none" 
                            src="https://hcb.hackclub.com/donations/start/smcs-alumni-collective" 
                            name="donateFrame"
                            title="SMCS Alumni Collective Donation Form"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}