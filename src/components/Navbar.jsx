"use client";

import Link from "next/link";
import Logo from "../../public/next.svg";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import LangSwitcher from "./langSwitcher";

function Navbar(session) {
  const t = useTranslations("Navbar");

  return (
    <nav className="shadow-xl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-4">
          <div>
            <Link href="/">
              <Image src={Logo} alt="NextJS Logo" width={100} height={100} />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <LangSwitcher />
            {!session ? (
              <div className="flex items-center">
                <Link href="/login" className="mx-2">
                  Login
                </Link>
                <Link href="/register" className="mx-2">
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex items-center">
                <Link
                  href="/welcome"
                  className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg mx-2"
                >
                  {t("profile")}
                </Link>
                <a
                  onClick={() => signOut()}
                  className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg mx-2"
                  role="button"
                >
                  {t("logout")}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;