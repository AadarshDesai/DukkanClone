import { GoHome } from "react-icons/go";
import { HiOutlineClipboardList,HiOutlineLightningBolt  } from "react-icons/hi";
import { PiSquaresFourLight, PiSpeakerHigh  } from "react-icons/pi";
import { CiDeliveryTruck, CiDiscount1  } from "react-icons/ci";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlinePayments, MdOutlinePeople, MdOutlineColorLens   } from "react-icons/md";

export const Dashboard_sidebar_links = [
    {
        key: "home",
        label: "Home",
        key: "home",
        path: "/home",
        icon: <GoHome/>
    },
    {
        key: "orders",
        label: "Orders",
        path: "/orders",
        icon: <HiOutlineClipboardList/>
    },
    {
        key: "products",
        label: "Products",
        path: "/products",
        icon: <PiSquaresFourLight/>
    },
    {
        key: "delivery",
        label: "Delivery",
        path: "/delivery",
        icon: <CiDeliveryTruck/>
    },
    {
        key: "marketing",
        label: "Marketing",
        path: "/marketing",
        icon: <PiSpeakerHigh />
    },
    {
        key: "analytics",
        label: "Analytics",
        path: "/analytics",
        icon: <BsBarChartLine/>
    },
    {
        key: "payouts",
        label: "Payouts",
        path: "/",
        icon: <MdOutlinePayments/>
    },
    {
        key: "discounts",
        label: "Discounts",
        path: "/discounts",
        icon: <CiDiscount1 />
    },
    {
        key: "audience",
        label: "Audience",
        path: "/audience",
        icon: <MdOutlinePeople />
    },
    {
        key: "appearence",
        label: "Appearence",
        path: "/appearence",
        icon: <MdOutlineColorLens />
    },
    {
        key: "plugins",
        label: "Plugins",
        path: "/plugins",
        icon: <HiOutlineLightningBolt />
    }
];