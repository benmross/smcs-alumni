import Image from "next/image"
import Link from "next/link"

export default function Finances() {
    return (
        <div className="flex flex-col space-y-6 items-center px-44 py-24">
            <p className="text-7xl font-bold pt-5">Finances</p>
            <div className="flex flex-col xl:flex-row space-y-6 xl:space-y-0 xl:space-x-6">
                <Link className="flex flex-col items-center px-10 py-10 transition duration-300 hover:scale-110"
                    href="https://hcb.hackclub.com/reimbursement/start/smcs-alumni-collective"
                >
                    <div
                        className="rounded-full bg-black p-2 px-8 flex w-28 h-28 items-center justify-center">
                        <Image
                            width={100}
                            height={100}
                            src="/wire.png"
                            alt="Wire money address"
                        />
                    </div>
                    <p className="text-4xl font-bold text-center pt-2">Request Reimbursement</p>
                </Link>
                <Link className="flex flex-col items-center px-10 py-10 transition duration-300 hover:scale-110"
                    href="https://hcb.hackclub.com/smcs-alumni-collective/transactions"
                >
                    <div
                        className="rounded-full bg-black p-2 px-8 flex w-28 h-28 items-center justify-center">
                        <Image
                            width={100}
                            height={100}
                            src="/link.png"
                            alt="Donation widget"
                        />
                    </div>
                    <p className="text-4xl font-bold text-center pt-2">Public Ledger/Finances</p>
                </Link>
            </div>
        </div>
    )
}