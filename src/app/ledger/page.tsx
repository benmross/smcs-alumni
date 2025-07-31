import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata = {
    title: "Public Ledger - SMCS Alumni Collective",
    description: "View transparent financial records and transactions for the SMCS Alumni Collective.",
};

export default function PublicLedger() {
    return (
        <div className="min-h-screen">
            <HeroSection type="ledger" />
            
            {/* Introduction Section */}
            <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                                Financial <span className="text-[#ff3131]">Transparency</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-[#ff3131] to-[#e02828] mx-auto"></div>
                        </div>
                        
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            We believe in complete transparency with our alumni community. View all donations, 
                            expenses, and financial activity through our public ledger powered by Hack Club Bank.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-6 pt-8">
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Transparent</h3>
                                <p className="text-gray-600 text-sm">Every donation and expense is publicly visible</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Updates</h3>
                                <p className="text-gray-600 text-sm">Ledger updates immediately with new transactions</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Platform</h3>
                                <p className="text-gray-600 text-sm">Powered by Hack Club Bank&apos;s secure infrastructure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Access Section */}
            <section className="relative py-12 bg-gradient-to-r from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                            Ready to view our finances?
                        </h3>
                        <p className="text-gray-600">
                            Click below to access the complete public ledger with all transactions and balances.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="https://hcb.hackclub.com/smcs-alumni-collective/transactions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#ff3131] to-[#e02828] rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:from-[#e02828] hover:to-[#ff3131]"
                            >
                                <span>View Public Ledger</span>
                                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                            <Link
                                href="/donate"
                                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#ff3131] bg-white border-2 border-[#ff3131] rounded-xl hover:bg-[#ff3131] hover:text-white transform transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                Make a Donation
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Embedded Ledger */}
            <section className="relative bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Live Financial Data
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Browse through all transactions, view current balance, and track how donations are being used.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto">
                        <iframe 
                            className="w-full h-screen border-none" 
                            src="https://hcb.hackclub.com/smcs-alumni-collective/transactions"
                            name="ledgerFrame"
                            title="SMCS Alumni Collective Public Ledger"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}