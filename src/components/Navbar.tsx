import Link from "next/link";
import Image from "next/image";

import AuthLinks from "./AuthLinks";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-x-3">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>

      <div className="">blog app</div>

      <div className="flex gap-x-5">
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
}
