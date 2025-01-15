
export default function Footer() {
    var date = new Date();
    return (
        <footer className={`w-screen text-white py-4 text-center text-sm border-t border-white/20`}>
            <p>
                © 2024-{date.getFullYear()} <span className="text-orange-400">เว็ปไซต์เก็บพอร์ตของ @PPekKunGzDev</span>. All rights reserved.
            </p>
        </footer>
    )
}
