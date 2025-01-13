"use client"

import { useLanguage } from "@/contexts/LanguageContext";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";

const route = {
    main: '/',
    member: '/projects',
    shop: '/language',
    contact: '/contact'
}

export default function HeaderMenu() {
    const currentPath = usePathname();
    const { language, setLanguage } = useLanguage();
    
    return (
        <header className="text-white text-center dark:bg-transparent bg-[#1d1e20]">
            <div className="fixed w-full p-1 h-fit bg-zinc-900/60 shadow-xl backdrop-blur-md z-50 border-b border-zinc-800/70">
                <div className="container mx-auto flex h-16 items-center justify-center md:justify-between px-4 md:px-6">
                    <Link href="/" target='_blank' className="md:flex hidden items-center gap-2">
                        <Image src="/SPOILER__27_20240304193129.png" alt="SPOILER__27_20240304193129.png" width={70} height={68} className="p-3 rounded-2xl" property="" draggable="false" priority />
                        <h1 className="text-2xl space-mono-bold uppercase tracking-wider underline decoration-gray-600 decoration-2">PPekKunGz</h1>
                    </Link>
                    <nav className="flex items-center gap-6">
                        <Link href={route.main} className={currentPath === "/" ? "tracking-wide text-[16px] font-bold inline-block relative hover:text-primary bg-gradient-to-r from-white via-white to-white bg-[length:100%_2px] bg-no-repeat bg-bottom"
                            : "tracking-wide text-[16px] font-bold inline-block relative hover:text-primary after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"}>
                            {language === "en" ? "Home" : language === "th" ? "หน้าหลัก" : ""}
                        </Link>
                        <Link href={route.member} className={currentPath === "/projects" ? "tracking-wide text-[16px] font-bold inline-block relative hover:text-primary bg-gradient-to-r from-white via-white to-white bg-[length:100%_2px] bg-no-repeat bg-bottom"
                            : "tracking-wide text-[16px] font-bold inline-block relative hover:text-primary after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"}>
                            {language === "en" ? "Portfolio" : language === "th" ? "ผลงาน" : ""}
                        </Link>
                        <Link href={route.contact} className={currentPath === "/contact" ? "tracking-wide text-[16px] font-bold inline-block relative hover:text-primary bg-gradient-to-r from-white via-white to-white bg-[length:100%_2px] bg-no-repeat bg-bottom"
                            : "tracking-wide text-[16px] font-bold inline-block relative hover:text-primary after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"}>
                            {language === "en" ? "Contact" : language === "th" ? "ติดต่อ" : ""}
                        </Link>
                        <button onClick={() => setLanguage(language === 'en' ? 'th' : 'en')} className="px-2 py-1 border border-white/20 rounded hover:bg-[#1d1e20cb] duration-500 transition-all scale-100 hover:scale-105">
                            {language === 'en' ? 'TH' : 'EN'}
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
