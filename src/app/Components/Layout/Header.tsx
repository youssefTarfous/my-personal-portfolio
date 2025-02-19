"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "@/globals.css";
import FlipOnClickButton from "../UI/FlipButton";
import { Navbar } from "../UI/navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex container items-center top-0 sticky justify-between text-white z-50 transition-all duration-300 ease-in-out ${
        scrolling ? "bg-[#06182d]" : "bg-transparent"
      }`}
    >
      <Image src="/Logo.png" alt="YTX logo" width={90} height={72} priority />

      <div
        className={`menu-btn lg:hidden relative flex justify-center items-center w-20 h-24 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out ${
          isOpen ? "open" : ""
        } z-50`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="menu-btn_burger w-14 h-1.5 bg-[#fff] rounded-md transition-all duration-500 ease-in-out"></div>
      </div>
      <Navbar />
      <div className="z-50">
        <button className="py-3 px-5 md:px-10 gradient-button hover:scale-105 text-white rounded-full">
          <FlipOnClickButton
            className=""
            onClick={() => {
              console.log("clicked");
            }}
          >
            Contact Me
          </FlipOnClickButton>
        </button>
      </div>
    </header>
  );
}
