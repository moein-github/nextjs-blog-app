"use client";

import Link from "next/link";
import { useState } from "react";

export default function AuthLinks() {
  const [open, setOpen] = useState(false);

  // temporary
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className="hidden sm:block">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className="cursor-pointer">Logout</span>
        </>
      )}

      <div
        className="w-5 h-4 flex sm:hidden flex-col justify-between cursor-pointer"
        onClick={() => setOpen((open) => !open)}
      >
        <div className="w-full h-[2px] bg-slate-900 dark:bg-slate-50"></div>
        <div className="w-full h-[2px] bg-slate-900 dark:bg-slate-50"></div>
        <div className="w-full h-[2px] bg-slate-900 dark:bg-slate-50"></div>
      </div>

      {open && (
        <div className="absolute top-20 left-0 bg-slate-50 dark:bg-slate-900 h-screen w-full flex sm:hidden flex-col justify-center items-center gap-y-12 text-4xl">
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>

          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className="cursor-pointer">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
