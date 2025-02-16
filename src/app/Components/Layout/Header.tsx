"use client";

import { useState } from "react";
import Image from "next/image";
import "@/globals.css";
import FlipText from "../UI/FlipText";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center top-0 sticky justify-between text-white">
      {/* Logo */}
      <Image src="/Logo.png" alt="YTX logo" width={64} height={64} priority />
      <span
        className="md:hidden block focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-8 h-8 text-white cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </span>

      {/* Navigation Menu */}
      <nav
        className={`absolute top-16 left-0 w-full md:static md:w-auto md:flex ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:gap-x-16 md:bg-transparent border-2 border-solid border-[#007BFF] md:border-none  z-10 bg-[#06182C] rounded-lg ">
          <li className="text-center p-2 text-[#007BFF] rounded-lg w-full border-solid border-[#007BFF] border-b-2 md:border-none">
            <FlipText className="text-4xl uppercase" href="#home">
                Home
            </FlipText>
          </li>
          <li className="text-center p-2 text-[#007BFF] rounded-lg w-full border-solid border-[#007BFF] border-b-2 md:border-none">
          <FlipText className="text-4xl uppercase" href="#home">
                Home
            </FlipText>
          </li>
          <li className="text-center p-2 text-[#007BFF] rounded-lg w-full border-solid border-[#007BFF] border-b-2 md:border-none">
          <FlipText className="text-4xl uppercase" href="#home">
                Home
            </FlipText>
          </li>
          <li className="text-center p-2 text-[#007BFF] rounded-lg w-full border-solid border-[#007BFF] border-b-2 md:border-none">
            <FlipText className="text-4xl uppercase" href="#home">
                Home
            </FlipText>
          </li>
        </ul>
      </nav>

      {/* Contact Button (Always Visible) */}
      <div>
        <button className="py-3 px-5 md:px-10 gradient-button hover:scale-105 text-white rounded-full">
         <FlipText className="" href="#contact">Contact me</FlipText> 
        </button>
      </div>
    </header>
  );
}
