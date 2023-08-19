"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Header () {
    const [active, setActive] = useState<any>("");

    useEffect(()=>{ 
    const pageName = window.location.pathname.slice(1);
    console.log(pageName, "pge")
        setActive(pageName);
    },[])
    return (
        <section>
            <div className="ios-header py-8 flex items-center justify-center border-b">
                <div className="w-[90%] lg:w-[80%] grid grid-cols-4 gap-4">
                        <div className="col-span-2 flex items-center">
                        <Image
                            className="w-auto h-[6rem]"
                            src="/logo_text.svg"
                            width={65}
                            height={65}
                            alt="integrated occupational health services"
                            />
                        </div>
                        <div className="ios-header-contacts">
                            <p className="text-[#586e63] font-[700] mb-1">address: 6 ezimgbu crescent, presidential estate, gra phase iv, port harcourt, rivers state</p>
                            <p className="text-[#586e63] font-[700] mb-1">Phone: +234 703 784 6079</p>
                            <a className="text-[#586e63] font-[700] mb-1" href="mailto:info@iohs.com">Email: integratedohslimited@gmail.com</a>
                        </div>
                        <div className="ios-contact-us flex flex-col justify-center">
                            <h3 className="font-[200] text-[1.3rem] mb-2">Contact Us</h3>
                            <p className="text-[#586e63] text-[1.5rem] font-[700]">+234 703 784 6079</p>
                        </div>
                </div>
            </div>
            <div className="flex justify-center border-b">
                <nav className="flex w-[90%] lg:w-[80%]">
                    <Link className={`font-[700] ${active === ""? "bg-[#274fa7] text-white": "hover:bg-[#274fa7] hover:text-white  hover:shadow-lg"} py-4 md:py-6 w-[8rem] text-center relative`} href="/">
                        Home
                        <div className="bg-white absolute bottom-1 left-0 h-[0.28rem] right-0"></div>
                    </Link>
                    <Link className={`font-[700] ${active === "about-us"? "bg-[#274fa7] text-white": "hover:bg-[#274fa7] hover:text-white hover:shadow-lg"} py-4 md:py-6 w-[8rem] text-center relative`} href="/about-us">
                        About Us
                        <div className="bg-white absolute bottom-1 left-0 h-[0.28rem] right-0"></div>
                    </Link>
                    <Link className={`font-[700] ${active === "services"? "bg-#274fa7] text-white": "hover:bg-[#274fa7] hover:text-white hover:shadow-lg"} py-4 md:py-6 w-[8rem] text-center relative`} href="/services">
                            Services
                        <div className="bg-white absolute bottom-1 left-0 h-[0.28rem] right-0"></div>
                    </Link>
                    <Link className={`font-[700] ${active === "contact"? "bg-[#274fa71] text-white": "hover:bg-[#274fa7] hover:text-white hover:shadow-lg"} py-4 md:py-6 w-[8rem] text-center relative`} href="/contact-us">
                        Contact Us
                        <div className="bg-white absolute bottom-1 left-0 h-[0.28rem] right-0"></div>
                    </Link>
                </nav>
            </div>
        </section>
    );
}