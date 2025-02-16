"use client";

import { useState } from "react";
import Image from "next/image";
import "@/globals.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center top-0 sticky justify-between text-white">
      {/* Logo */}
      <Image src="/Logo.png" alt="Next.js logo" width={64} height={64} priority />

      {/* Burger Menu (Visible on Medium Screens) */}
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
        <ul className="flex flex-col md:flex-row md:gap-5  p-4 md:p-0">
          <li className="text-center">
            <a href="#home" className="block p-2 md:p-0 hover:text-blue-400 md:text-center ">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block p-2 md:p-0 hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="block p-2 md:p-0 hover:text-blue-400">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="block p-2 md:p-0 hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Contact Button (Always Visible) */}
      <div>
        <button className="light py-3 px-5 md:px-10 gradient-button hover:scale-105 text-white rounded-full">
          Contact me
        </button>
      </div>
    </header>
  );
}
