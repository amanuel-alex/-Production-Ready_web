"use client";

import { auth, signOut } from "@/app/auth";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [session, setSession] = useState();

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await auth();
      setSession(sessionData);
    };
    fetchSession();
  }, []);

  return (
    <header className="px-5 py-3 shadow-sm bg-slate-100">
      <nav className="flex justify-between items-center text-slate-900">
        <div className="text-2xl font-bold">
          {" "}
          <Image src="/amazing-logoo.png" alt="logo" width={40} height={40} />
        </div>
        <ul className="flex space-x-5">
          <Link href="/" className="text-lg font-semibold">
            Home
          </Link>
          <Link href="/main/about" className="text-lg font-semibold">
            About
          </Link>

          <Link href="/main/contact" className="text-lg font-semibold">
            Contact
          </Link>
          <Link href="/" className="text-lg font-semibold">
            Home
          </Link>
          <Link href="/main/about" className="text-lg font-semibold">
            About
          </Link>

          <Link href="/main/contact" className="text-lg font-semibold">
            Contact
          </Link>
        </ul>

        <div>
          {session && session?.user ? (
            <>
              <Link href="" className="text-lg font-semibold">
                Profile
              </Link>
              <button onClick={() => signOut()}>Logout</button>
              <Link
                href={`/user/${session?.user?.id}`}
                className="text-lg font-semibold"
              >
                {session?.user?.name}
              </Link>
            </>
          ) : (
            <div className="flex space-x-5 cursor-pointer">
              <Link href="/auth/signup">
                <Button variant="soft">Sign up</Button>
              </Link>
              <Link href="/auth/loginForm">
                <Button variant="soft">Login</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
