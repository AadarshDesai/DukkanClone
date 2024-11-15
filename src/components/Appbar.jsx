import { HiSpeakerphone } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";

export function Appbar(){
    return <div className="border-b border-[#D9D9D9] h-[3.8rem] flex items-center justify-between px-6">
        <div className="flex items-center gap-1 pl-3 w-70">
            <div className="text-xl font-medium">Payouts</div>
            <div className="pl-2 pt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
            <div className="text-slate-600 text-sm">How it works</div>
        </div>
        <div className=" flex items-center bg-[#F2F2F2] px-3 py-2 rounded-sm flex-initial w-[30%] gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="size-4 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input type="text" placeholder="Search features, tutorials, etc." className="bg-transparent focus:outline-none text-base w-full"/>
        </div>
        <div className="flex items-center justify-center gap-2 ">
            <div className="text-2xl text-[#4D4D4D] bg-[#E6E6E6] rounded-full h-10 w-10 p-2"><HiSpeakerphone/></div>
            <div className="text-3xl text-[#4D4D4D] bg-[#E6E6E6] rounded-full h-10 w-10 p-1.5"><FaCaretDown/></div>
        </div>
    </div>
}