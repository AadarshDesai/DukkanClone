import logo from "../images/Nishayan.png";
import { Dashboard_sidebar_links } from "./lib/constants/Navigation";
import { Link, useLocation } from "react-router-dom";
import { CiWallet } from "react-icons/ci";
import classNames from 'classnames'

export function Sidebar(){
    return <div className="flex flex-col h-screen text-white">
        <div className="flex p-3 items-center">
            <div>
                <img src={logo} className="rounded-md w-10 h-10"/>
            </div>
            <div className="flex flex-1 flex-col pl-2.5">
                <div className="font-semibold text-sm">Nishayan</div>
                <div className="underline text-gray-400 pt-1 text-sm">Visit Store</div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
        <div className="flex-1 flex flex-col py-2">
            {Dashboard_sidebar_links.map((item)=>{
                return <MenuComponent key={item.key} item={item}/>
            })}
        </div>
        <div className="flex px-2 mx-3 py-2 mb-4 gap-2 bg-[#353C53] rounded-md items-center">
            <div className="text-3xl font-extrabold rounded-sm bg-[#FFFFFF]/10 p-1">
                <CiWallet/>
            </div>
            <div className="flex flex-col pl-2 text-sm">
                <div>Available Credits</div>
                <div className="font-semibold text-lg">224.10</div>
            </div>
        </div>
    </div>
}

function MenuComponent({ item }){
    const { pathname } = useLocation();
    return (
        <Link to={item.path} className={classNames(pathname === item.path ? "text-[#D2D4D9] text-[1.30rem] flex items-center gap-2 px-3 py-1.5 text-base font-medium bg-[#FFFFFF]/10 rounded-md mx-2" : "text-[#D2D4D9] text-[1.30rem] flex items-center gap-2 px-2 py-1.5 text-base font-medium hover:bg-[#FFFFFF]/10 rounded-md mx-2")}>
            <span className="pr-1 text-xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}