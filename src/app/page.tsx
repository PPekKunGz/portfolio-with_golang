import { Paper, Text } from "@mantine/core";

export default function Home() {
  return (
    <div className="gap-3 flex flex-col text-center items-center justify-center min-h-[94.5dvh] md:mt-0 mt-10">
      <span className="text-xs font-bold space-mono text-zinc-700 bg-white rounded-full px-2 py-1 tracking-widest">HELLO WELCOME TO MY SITE</span>
      <h1 className="text-7xl md:text-8xl">สวัสดีครับ..</h1>
      <div className="text-lg -translate-y-4">ผมมีนามว่า &nbsp;
        <span className="font-bold text-violet-500 tracking-widest bg-gradient-to-r from-rose-500 via-fuchsia-700 to-gray-200 bg-clip-text text-transparent">"เพ็ก"</span>
      </div>
      <h2 className="-translate-y-4">หรืออีกชื่อที่เรียกกันในวงการว่า</h2>
      <div className="-translate-y-6 bg-white/10 rounded-lg px-4 py-1">
        <span className="text-4xl font-bold text-violet-500 tracking-widest bg-gradient-to-r from-rose-500 via-fuchsia-700 to-gray-200 bg-clip-text text-transparent">PPekKunGzDev</span>
      </div>
      <Paper shadow="md" className="bg-slate-500/10 md:w-[88vh] w-fit" radius="lg" p="xl">
        <Text className="text-balance md:text-pretty">
          ผม <b>PPekKunGz</b> เป็น <u>Frontend Developer</u> ที่ชื่นชอบการพัฒนาเว็บไซต์และสร้างประสบการณ์การใช้งานที่ดีสำหรับผู้ใช้ <br/> โดยเน้นเรียนรู้และพัฒนาตัวเองอยู่เสมอ

          ในเวลาว่าง ผมสนุกกับการเป็น Minecraft Developer ชอบทดลองสร้างมอดและพัฒนาระบบต่างๆ ในเซิร์ฟเวอร์ Minecraft เพื่อเพิ่มความสนุกและความแปลกใหม่ให้กับเกม

          ตอนนี้ผมทำงานที่ Dimension Studio ที่ซึ่งผมได้เรียนรู้และร่วมมือกับทีมงานในการทำโปรเจกต์ที่น่าสนใจในวงการ Minecraft Roleplay
        </Text>
      </Paper>
    </div>
  );
}
