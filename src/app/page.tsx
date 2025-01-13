"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Paper, Text } from "@mantine/core";
import { useState } from "react";

export default function Home() {
    const { language } = useLanguage();

    type Translations = {
        [key: string]: {
            welcome: string;
            name: string;
            nickname: string;
            title: string;
            devName: string;
            intro: string;
        };
    };

    const translations: Translations = {
        th: {
            welcome: "สวัสดีครับ..",
            name: "ผมมีนามว่า",
            nickname: '"เพ็ก"',
            title: "หรืออีกชื่อที่เรียกกันในวงการว่า",
            devName: "PPekKunGzDev",
            intro: `
        ผม <b>PPekKunGz</b> เป็น <u>Frontend Developer</u> ที่ชื่นชอบการพัฒนาเว็บไซต์และสร้างประสบการณ์การใช้งานที่ดีสำหรับผู้ใช้
        โดยเน้นเรียนรู้และพัฒนาตัวเองอยู่เสมอ

        ในเวลาว่าง ผมสนุกกับการเป็น Minecraft Developer ชอบทดลองสร้างมอดและพัฒนาระบบต่างๆ ในเซิร์ฟเวอร์ Minecraft เพื่อเพิ่มความสนุกและความแปลกใหม่ให้กับเกม

        ตอนนี้ผมทำงานที่ Dimension Studio ที่ซึ่งผมได้เรียนรู้และร่วมมือกับทีมงานในการทำโปรเจกต์ที่น่าสนใจในวงการ Minecraft Roleplay
      `,
        },
        en: {
            welcome: "Hello there..",
            name: "My name is",
            nickname: '"Pek"',
            title: "Or, as they call me in the industry",
            devName: "PPekKunGzDev",
            intro: `
        I am <b>PPekKunGz</b>, a <u>Frontend Developer</u> who enjoys creating websites and delivering great user experiences.
        I am always eager to learn and improve myself.

        In my free time, I enjoy being a Minecraft Developer. I love experimenting with mod creation and developing various systems in Minecraft servers to enhance the fun and uniqueness of the game.

        Currently, I work at Dimension Studio, where I learn and collaborate with the team on exciting projects in the Minecraft Roleplay industry.
      `,
        },
    };

    const t = translations[language];

    return (
        <div className="gap-3 flex flex-col text-center items-center justify-center min-h-[94.5dvh] md:mt-0 mt-10">

            <span className="text-xs font-bold space-mono text-zinc-700 bg-white rounded-full px-2 py-1 tracking-widest">
                {language === "th" ? "HELLO WELCOME TO MY SITE" : "HELLO WELCOME TO MY SITE"}
            </span>
            <h1 className="text-7xl md:text-8xl">{t.welcome}</h1>
            <div className="text-lg -translate-y-4">{t.name}&nbsp;
                <span className="font-bold text-violet-500 tracking-widest bg-gradient-to-r from-rose-500 via-fuchsia-700 to-gray-200 bg-clip-text text-transparent">
                    {t.nickname}
                </span>
            </div>
            <h2 className="-translate-y-4">{t.title}</h2>
            <div className="-translate-y-6 bg-white/10 rounded-lg px-4 py-1">
                <span className="text-4xl font-bold text-violet-500 tracking-widest bg-gradient-to-r from-rose-500 via-fuchsia-700 to-gray-200 bg-clip-text text-transparent">
                    {t.devName}
                </span>
            </div>
            <Paper shadow="md" className="bg-slate-500/10 md:w-[88vh] w-fit" radius="lg" p="xl">
                <Text className="text-balance md:text-pretty" dangerouslySetInnerHTML={{ __html: t.intro }}/>
            </Paper>
        </div>
    );
}