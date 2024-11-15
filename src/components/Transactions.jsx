import { Link } from "react-router-dom";
import { getStatus } from "./utils/getStatus";


const transactionsData = [
    {
        OrderId: 281209,
        Status: "Successfull",
        TransactionId: "TRX123456",
        RefundDate: "Today, 8:45 PM",
        OrderAmount: "₹1125.00"
    },
    {
        OrderId: 281210,
        Status: "Processing",
        TransactionId: "TRX789012",
        RefundDate: "Tomorrow, 10:00 AM	",
        OrderAmount: "₹950.50"
    },
    {
        OrderId: 281211,
        Status: "Successfull",
        TransactionId: "TRX345678",
        RefundDate: "Yesterday, 3:30 PM",
        OrderAmount: "₹750.00"
    },
    {
        OrderId: 281212,
        Status: "Successfull",
        TransactionId: "TRX901234",
        RefundDate: "Today, 11:20 AM",
        OrderAmount: "₹2000.00"
    },
    {
        OrderId: 281213,
        Status: "Processing",
        TransactionId: "TRX567890",
        RefundDate: "Tomorrow, 9:00 AM",
        OrderAmount: "₹1800.00"
    },
    {
        OrderId: 281214,
        Status: "Processing",
        TransactionId: "TRX098765",
        RefundDate: "Yesterday, 2:00 PM",
        OrderAmount: "₹500.00"
    },
    {
        OrderId: 281215,
        Status: "Successfull",
        TransactionId: "TRX456789",
        RefundDate: "Today, 10:30 AM",
        OrderAmount: "₹3000.00"
    },
    {
        OrderId: 281216,
        Status: "Processing",
        TransactionId: "TRX987654",
        RefundDate: "Tomorrow, 11:30 AM",
        OrderAmount: "₹1200.00"
    },
    {
        OrderId: 281217,
        Status: "Processing",
        TransactionId: "TRX654321",
        RefundDate: "Yesterday, 4:00 PM",
        OrderAmount: "₹900.00"
    },
    {
        OrderId: 281218,
        Status: "Successfull",
        TransactionId: "TRX234567",
        RefundDate: "Today, 9:45 AM",
        OrderAmount: "₹1500.00"
    }
];

export function Transactions(){
    return <div className="bg-white flex flex-col flex-1 p-2 gap-3">
        <div className="flex justify-between">
            <div className="flex items-center px-3 rounded-md border border-gray-300 text-base flex-initial w-[30%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="size-4 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" placeholder="Order ID or Transaction ID" className="pl-2 w-full focus:outline-none active:outline-none"/>
            </div>
            <div className="flex gap-3">
                <div className="flex border border-gray-300 gap-2 px-2 text-gray-600 rounded-md items-center">
                    <span className="text-base pl-2">Sort</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                </div>
                <div className="p-2 border border-gray-400 rounded-md items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="mt-1">
            <table className="w-full">
                <thead className="bg-[#F2F2F2] text-[#4D4D4D] text-left">
                    <tr>
                        <td className="px-3 py-[10px] font-medium rounded-md">Order ID</td>
                        <td className="px-3 py-[10px] font-medium">Status</td>
                        <td className="px-3 py-[10px] font-medium"> Transaction ID</td>
                        <td className="px-3 py-[10px] font-medium">Refund Date</td>
                        <td className="px-3 py-[10px] font-medium text-right rounded-md">Order Amount</td>
                    </tr>
                </thead>
                <tbody className="bg-white divide-[#E6E6E6]">
                    {transactionsData.map((transaction)=>(
                        <tr key={transaction.OrderId}>
                            <td className="px-3 py-[10px] text-[#146EB4] font-medium">
                                <Link to={`/order/${transaction.OrderId}`}>#{transaction.OrderId}</Link>
                            </td>
                            <td className="px-3 py-[10px] text-[#4D4D4D]">{getStatus(transaction.Status)}</td>
                            <td className="px-3 py-[10px] text-[#4D4D4D]">{transaction.TransactionId}</td>
                            <td className="px-3 py-[10px] text-[#4D4D4D]">{transaction.RefundDate}</td>
                            <td className="px-3 py-[10px] text-[#1A181E] text-right">{transaction.OrderAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}