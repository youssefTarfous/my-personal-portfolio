"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "@/globals.css";
import FlipOnClickButton from "../UI/FlipButton";
import { Navbar } from "../UI/navbar";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const links = ["Home", "About", "Projects", "Contact"];
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex container items-center top-0 sticky justify-between text-white z-50 transition-all duration-300 ease-in-out ${
        scrolling ? "bg-[#06182d]" : "bg-transparent"
      } z-50`}
    >
      <Image src="/Logo.png" alt="YTX logo" width={90} height={72} priority />

      {/* Menu Button */}
      <div
        className={`menu-btn ${
          isOpen ? `bg-white open` : `bg-blue`
        } bg-white hover:bg-blue-700 rounded-2xl lg:hidden relative flex justify-center items-center w-20 h-20 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Burger Menu */}
        <div
          className={`menu-btn_burger ${
            isOpen ? "open" : ""
          } bg-[#06182d] w-16 h-1.5  rounded-md transition-all duration-500 ease-in-out`}
        ></div>
      </div>
      <motion.nav
        className={`fixed top-0 left-0 w-full h-full bg-[#06182d] flex flex-col items-center justify-center transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        initial={{ y: "-100vh", opacity: 0 }}
        animate={isOpen ? { y: 0, opacity: 1 } : { y: "-100vh", opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="w-full container h-full mx-auto flex flex-col">
          {/* Navbar Header */}
          <div className="flex justify-between items-center w-full h-20 py-5">
            <Image
              src="/Logo.png"
              alt="YTX logo"
              width={90}
              height={72}
              priority
            />

            {/* Animated Menu Button */}
            <motion.div
              className={`menu-btn  rounded-2xl lg:hidden relative flex justify-center items-center w-20 h-20 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out ${
                isOpen ? "open" : ""
              } z-1000`}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`menu-btn_burger ${
                  isOpen ? "open nav" : ""
                } w-16 h-1.5 rounded-md transition-all duration-500 ease-in-out`}
              />
            </motion.div>
          </div>

          {/* Staggered Menu Links */}
          <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: "-100vw" },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                  delay: 0.5,
                },
              },
            }}
            className="h-auto flex justify-center items-center flex-col"
          >
            {links.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="gap-2 text-center w-full flex flex-col font-semibold text-white transition-colors border-b-2 border-solid py-5 border-[#4A5568] focus:text-[#0007fb] focus:opacity-80"
                variants={{
                  hidden: { opacity: 0, x: "-100vw" },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4, delay: index * 0.3 },
                  },
                }}
              >
                <span className="md:text-5xl text-4xl">{item}</span>
                <span className="opacity-70 font-normal">
                  {item === "Home"
                    ? "Learn what we do here"
                    : `More about ${item}`}
                </span>
              </motion.a>
            ))}
          </motion.div>
          {/* Footer Icons & Contact Button */}
          <motion.div
            className="flex justify-between items-center py-10"
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Social Icons */}
            <motion.div
              className="flex py-5 gap-5"
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1, delayChildren: 0.5 },
                },
              }}
            >
              {[SiGmail, FaGithub, FaLinkedin, FaPhoneAlt].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="text-white h-8 w-8 cursor-pointer" />
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Button */}
            <motion.button
              className="py-3 px-5 md:px-10 gradient-button hover:scale-105 text-white rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>
      {!isOpen && <Navbar links={links} />}

      {!isOpen && (
        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        >
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
        </motion.div>
      )}
    </header>
  );
}
