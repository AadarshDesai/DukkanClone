import { Dashboard_sidebar_links } from "../components/lib/constants/Navigation";
import { Overview } from "../components/Overview";
import { AmountPending } from "../components/AmountPending";
import { AmountProcessed } from "../components/AmountProcessed";
import { NextPayout } from "../components/NextPayout";
import { Transactions } from "../components/Transactions";

export function Dashboard(){
    return <div className="bg-neutral-100 flex-1 flex flex-col overflow-scroll gap-2 pt-8 px-10">
        <Overview/>
        <div className="flex justify-between gap-3 pt-4">
            <NextPayout/>
            <AmountPending/>
            <AmountProcessed/>
        </div>
        <div className="text-xl font-medium py-5">
            Transactions | This Month
        </div>
        <div className="flex gap-3 text-base pb-6">
            <button className="px-4 py-[6px] bg-[#E6E6E6] text-[#808080] rounded-full">Payouts (22)</button>
            <button className="px-4 py-[6px] bg-[#146EB4] text-[#FFFFFF] rounded-full">Refunds (6)</button>
        </div>
        <Transactions/>
    </div>
}