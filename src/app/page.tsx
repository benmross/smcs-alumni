import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col w-screen h-screen items-center justify-center">
        <p className="text-5xl">smcs alumni collective yay!</p>
        <div className="flex justify-between">
            <div className="w-1/2">
                <p className="text-5xl text-[#ff3130] uppercase">Connecting</p>
                <p className="text-4xl">the community of SMCS alumni together for networking.</p>
            </div>
            <div className="w-1/2">
                <p className="text-5xl text-[#ff3130] uppercase">Fundraising</p>
                <p className="text-4xl">to support ongoing activities for the benefit of current SMCS students.</p>
            </div>
        </div>
    </div>
  );
}
