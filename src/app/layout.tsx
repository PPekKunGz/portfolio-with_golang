import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import '@mantine/core/styles.css';
import "./globals.css";
import AppProvider from "@/interface/AppProvider";

const noto_sans = Noto_Sans_Thai({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "เว็ปไซต์ของ @PPekKunGzDev",
  description: "อยากรู้ว่าผมเป็นใครทำงานอะไรหรือทุกวันนี้มีประวัติการทำงานอะไรมาบ้างสามารถเช็คได้ที่เว็ปผมเลย!!",
  metadataBase: new URL('https://ppekkungz.in.th'),

  openGraph: {
    url: 'https://ppekkungz.in.th',
    type: 'website',
    locale: 'th_TH',
    title: "เว็ปไซต์ของ @PPekKunGzDev",
    description: "อยากรู้ว่าผมเป็นใครทำงานอะไรหรือทุกวันนี้มีประวัติการทำงานอะไรมาบ้างสามารถเช็คได้ที่เว็ปผมเลย!!",
    images: [
      {
        url: '/cattttt.jpg',
        width: 200,
        height: 200,
        alt: 'ppekkungz',
      },
    ],
  },
  twitter: {
    title: "เว็ปไซต์ของ @PPekKunGzDev",
    description: "อยากรู้ว่าผมเป็นใครทำงานอะไรหรือทุกวันนี้มีประวัติการทำงานอะไรมาบ้างสามารถเช็คได้ที่เว็ปผมเลย!!",
    card: 'summary_large_image',
    site: 'เว็ปไซต์ของ @PPekKunGzDev',
    creator: '@PPekKunGzDev',
    images: [
      '/cattttt.jpg',
    ],
  },

}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto_sans.className} antialiased`} suppressHydrationWarning={true}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
