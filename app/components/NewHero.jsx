import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const NewHero = () => {
  return (
    <section className="bg-[url(/hero.webp)] bg-cover  text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <Image src="/logohero.webp" width={727} height={268} alt="Logo Hero" />

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#locations"
              className="flex border bg-black border-white text-white gap-3 font-bold items-center w-fit mt-8 rounded px-12 py-3 text-lg transition focus:outline-none  hover:bg-white hover:text-black duration-300"
            >
              Explore our locations
              <FaArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact-us"
              className="flex bg-white text-black gap-3 font-bold items-center w-fit mt-8 rounded px-12 py-3 text-lg transition focus:outline-none  hover:bg-black hover:text-white duration-300"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
