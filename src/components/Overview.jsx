export function Overview(){
    return <div className="flex justify-between">
        <div className="text-xl font-medium">Overview</div>
        <div className="flex gap-2 items-center justify-between py-1 px-1 bg-white rounded-sm border border-slate-300 ">
            <div className="text-neutral-700 text-base pl-2">This Month</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="pr-2 size-7 text-neutral-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
    </div>
}