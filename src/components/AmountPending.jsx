export function AmountPending(){
    return <div className="flex flex-col flex-grow bg-white rounded-md shadow-sm p-5 w-full h-fit">
            <div className="flex items-center gap-2">
                <div className="text-base text-gray-600">Amount pending</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 pt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
            <div className="flex items-center justify-between">
                <div className="text-3xl font-semibold pt-3">₹92,312.20</div>
                <div className="flex pt-3 underline text-[#146EB4] items-center text-lg">
                    <div className="text-[#146EB4] font-medium">13 Orders</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6 pt-1 text-[#146EB4] font-medium">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
    </div>
}