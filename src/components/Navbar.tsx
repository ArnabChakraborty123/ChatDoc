import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
const Navbar = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/assets/images/logo.jpeg"
              alt="chatdoc"
              width={30}
              height={30}
              className="rounded-full"
            />
          </Link>
          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Pro Version
            </Link>
            <LoginLink
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Sign in
            </LoginLink>
            <RegisterLink
              className={buttonVariants({
                size: "sm",
              })}
            >
              Get started{" "}
            </RegisterLink>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
