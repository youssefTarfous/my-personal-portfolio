"use client";

import { useState } from "react";
import Image from "next/image";
import "@/globals.css";
import FlipText from "../UI/FlipText";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center top-0 sticky justify-between text-white z-50">
      {/* Logo */}
      <Image src="/Logo.png" alt="YTX logo" width={90} height={72} priority />

      {/* Menu Button */}
      <div
        className={`menu-btn md:hidden relative flex justify-center items-center w-20 h-24 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out ${
          isOpen ? "open" : ""
        } z-50`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="menu-btn_burger w-14 h-1.5 bg-[#fff] rounded-md transition-all duration-500 ease-in-out"></div>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`absolute top-16 left-0 w-full md:static md:w-auto md:flex ${
          isOpen ? "block" : "hidden"
        } z-40`}
      >
        <ul className="flex flex-col md:flex-row md:gap-x-16 md:bg-transparent border-2 border-solid border-[#007BFF] md:border-none mt-10 md:mt-0 bg-[#06182C] rounded-lg z-30">
          <li className="text-center p-3 text-[#007BFF] rounded-lg w-full border-solid border-[#007BFF] border-b-2 md:border-none">
            <FlipText className="text-4xl uppercase" href="#home">
              Home
            </FlipText>
          </li>
          <li className="text-center p-3 text-[#007BFF] rounded-lg w-full border-solid border-[#007BFF] border-b-2 md:border-none">
            <FlipText className="text-4xl uppercase" href="#about">
              About
            </FlipText>
          </li>
          <li className="text-center p-3 text-[#007BFF] rounded-lg w-full border-solid border-[#007BFF] border-b-2 md:border-none">
            <FlipText className="text-4xl uppercase" href="#services">
              Services
            </FlipText>
          </li>
          <li className="text-center p-3 text-[#007BFF] rounded-lg w-full border-solid border-[#007BFF] border-b-2 md:border-none">
            <FlipText className="text-4xl uppercase" href="#contact">
              Contact
            </FlipText>
          </li>
        </ul>
      </nav>

      {/* Contact Button (Always Visible) */}
      <div className="z-50">
        <button className="py-3 px-5 md:px-10 gradient-button hover:scale-105 text-white rounded-full">
          <FlipText className="" href="#contact">
            Contact me
          </FlipText>
        </button>
      </div>
    </header>
  );
}
