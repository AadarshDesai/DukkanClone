export function getStatus(status){
    switch(status){
        case "Successfull":
            return(
            <div className="flex gap-2 items-center">
                <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                {status}
            </div>
            )
        case "Processing":
            return(
            <div className="flex gap-2 items-center">
                <span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>
                {status}
            </div>
            )
        default:
            return(
                <span></span>
            )
    }
}