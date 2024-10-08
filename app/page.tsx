
// Today's Class Homework

import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";

// 1. Create a simple website with 4 pages: Home, About, Contact, and Services.


// 2. Link every page from the main (Home) page.


// 3. Create one nested page.


// 4. Create a specific folder for the CSS module.

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex md:flex-nowrap flex-wrap justify-between items-center">
        <Image src={"/heroSection.jpg"} alt="home" width={850} height={500} className="opacity-60 md:h-[748px]" />
        <div className="flex flex-col items-start justify-center h-full w-full p-8 bg-gray-300 text-black">
          <h3 className="font-bold text-lg">Made to last.</h3>
          <h1 className="font-bold text-4xl leading-tight mt-4">The new definition of deluxe.</h1>
          <p className="text-base mt-4">Transition your style.</p>
         <Link href={"/contact"} className="underline text-base mt-4">Shop All</Link>
        </div>

      </div>
    </>
  );
}
