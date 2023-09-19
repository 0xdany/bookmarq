"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Button } from "@nextui-org/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/icons/bookmarkq_icon.svg"
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Bookmarq</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt">
              <Button
                color="primary"
                variant="shadow"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-800 hover:to-cyan-700 "
              >
                Create Post
              </Button>
            </Link>

            <Button
              color="default"
              variant="ghost"
              onClick={signOut}
              className="bg-gradient-to-r hover:from-red-400 hover:to-orange-400 hover:text-white"
            >
              Sign Out
            </Button>

            <Link href="/profile">
              <Image
                src={session.user.image}
                alt="Profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  variant="shadow"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="bg-gradient-to-r from-amber-400 to-orange-500 text-base hover:from-amber-500 hover:to-orange-600 text-white"
                >
                  Sign in
                </Button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session.user.image}
              alt="Profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <Button
                  color="default"
                  variant="ghost"
                  onClick={signOut}
                  className="bg-gradient-to-r hover:from-red-400 hover:to-orange-400 hover:text-white"
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  variant="shadow"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="bg-gradient-to-r from-amber-400 to-orange-500 text-base hover:from-amber-500 hover:to-orange-600 text-white"
                >
                  Sign in
                </Button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
