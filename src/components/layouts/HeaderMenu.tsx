"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const route = {
    main: '/',
    member: '/projects',
    shop: '/language',
    contact: '/contact'
}

export default function HeaderMenu() {
    const currentPath = usePathname();

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
                            หน้าหลัก
                        </Link>
                        <Link href={route.member} className={currentPath === "/projects" ? "tracking-wide text-[16px] font-bold inline-block relative hover:text-primary bg-gradient-to-r from-white via-white to-white bg-[length:100%_2px] bg-no-repeat bg-bottom"
                            : "tracking-wide text-[16px] font-bold inline-block relative hover:text-primary after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"}>
                            ผลงาน
                        </Link>
                        <Link href={route.shop} className={currentPath === "/shop" ? "tracking-wide text-[16px] font-bold inline-block relative hover:text-primary bg-gradient-to-r from-white via-white to-white bg-[length:100%_2px] bg-no-repeat bg-bottom"
                            : "tracking-wide text-[16px] font-bold inline-block relative hover:text-primary after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"}>
                            ภาษาที่ใช้งาน
                        </Link>
                        <Link href={route.contact} className={currentPath === "/contact" ? "tracking-wide text-[16px] font-bold inline-block relative hover:text-primary bg-gradient-to-r from-white via-white to-white bg-[length:100%_2px] bg-no-repeat bg-bottom"
                            : "tracking-wide text-[16px] font-bold inline-block relative hover:text-primary after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"}>
                            ติดต่อ
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
