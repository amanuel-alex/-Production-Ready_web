"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { auth, signOut, signIn } from "@/app/auth";
import { DropdownMenu, Button } from "@radix-ui/themes";

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
        <div className="text-2xl font-bold">Logo</div>
        <ul className="flex space-x-5">
          <Link href="/" className="text-lg font-semibold">
            Home
          </Link>
          <Link href="/about" className="text-lg font-semibold">
            About
          </Link>
          <Link href="/contact" className="text-lg font-semibold">
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
              <Link href="">
                <Button variant="soft">Sign up</Button>
              </Link>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft">Login</Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <div className="flex flex-col space-y-2 cursor-pointer">
                    <Link href="">
                      <Button color="green" onSelect={() => signIn("github")}>
                        Login with Github
                      </Button>
                    </Link>
                    <Link href="">
                      <Button onSelect={() => signIn("google")}>
                        Login with Google
                      </Button>
                    </Link>
                  </div>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
