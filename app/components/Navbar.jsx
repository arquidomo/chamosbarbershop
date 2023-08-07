"use client";
import Image from "next/image";
import logosmall from "@/public/logosmall.webp";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { CgClose, CgMenu } from "react-icons/cg";
import { useState } from "react";
import { stores } from "../data/stores";
import { IoMdArrowDropdown } from "react-icons/io";
import { ActiveLink } from "./ActiveLink";

const routes = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/services",
    name: "Services",
  },
];

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-black text-white shadow-lg fixed top-0 w-full  z-[9999]">
      <div className="mx-auto h-full max-w-screen-xl px-4 sm:px-6 py-3 md:py-5 lg:px-8">
        <div className="flex h-full  items-center justify-between">
          <div className="mr-auto flex items-center gap-10">
            <Link className="max-w-[40px] text-teal-600" href="/">
              <Image
                src={logosmall}
                alt="chamos barber logo"
                width={250}
                height={250}
                className="h-[50px] w-[40px]"
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {routes.map((route) => (
                  <li key={`li-${route.name}`}>
                    <ActiveLink name={route.name} href={route.href} />
                  </li>
                ))}
                <li>
                  <button className="peer text-white flex items-center">
                    Locations <IoMdArrowDropdown />
                  </button>
                  <div className="hidden peer-hover:flex absolute pt-[34px] mr-14 rounded-xl hover:flex w-[350px] flex-col drop-shadow-lg">
                    {stores.map((store) => (
                      <Link
                        key={store.name}
                        className="px-5 py-3 bg-black hover:bg-zinc-950 flex gap-2 items-start"
                        href={`/locations/${store.id}`}
                      >
                        <div className="w-2/3">
                          {store.name}
                          <br />
                          <span className=" text-xs">{store.address}</span>
                        </div>
                        <div className="w-1/3">
                          <Image
                            src={store.image}
                            alt="chamos barber shop photo"
                            width={150}
                            height={150}
                            className="object-scale-down rounded-sm"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex">
                <Link
                  className="flex rounded-md bg-white duration-300 px-3 md:px-5 py-2.5 text-sm font-medium text-black shadow items-center gap-2"
                  href="/contact-us"
                >
                  <span>
                    <IoCall />
                  </span>
                  Contact Us
                </Link>
              </div>
              <div
                onClick={() => setMobileMenu(!mobileMenu)}
                className="hover:bg-white/10 cursor-pointer p-2 duration-300 rounded-full"
              >
                {mobileMenu ? (
                  <CgClose className="md:hidden h-7 w-7 text-white" />
                ) : (
                  <CgMenu className="md:hidden h-7 w-7 text-white" />
                )}
              </div>
            </div>
          </div>
        </div>
        {mobileMenu && (
          <div className="flex md:hidden h-[calc(100vh-74px)] mt-10 items-start flex-col gap-5 bg-black">
            {routes.map((route) => (
              <div onClick={() => setMobileMenu(false)} key={route.name}>
                <ActiveLink href={route.href} name={route.name} />
              </div>
            ))}

            <div
              onClick={() => setMobileMenu(false)}
              className=" flex rounded-xl gap-3 flex-col drop-shadow-lg"
            >
              <p>Our Locations</p>
              {stores.map((store) => (
                <Link
                  key={store.name}
                  className="px-5 bg-white text-black  py-3 rounded-sm flex gap-2 items-start"
                  href={`/locations/${store.id}`}
                >
                  <div className="w-2/3">
                    {store.name}
                    <br />
                    <span className=" text-xs">{store.address}</span>
                  </div>
                  <div className="w-1/3">
                    <Image
                      src={store.image}
                      alt="chamos barber shop photo"
                      width={150}
                      height={150}
                      className="object-scale-down rounded-sm"
                    />
                  </div>
                </Link>
              ))}
            </div>

            <Link
              className="flex rounded-md bg-white duration-300 px-3 py-2.5 text-sm font-medium text-black shadow items-center gap-2"
              href="/contact-us"
            >
              <span>
                <IoCall />
              </span>
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
