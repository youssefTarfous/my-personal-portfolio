"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative flex items-center w-full min-h-[calc(100vh-62px)] text-white" id="home">
      <div className="flex flex-col md:flex-row sm:items-center h-full justify-between w-full max-w-6xl mx-auto rounded-s-md shadow-lg">
        {/* Left Section (Text & Buttons) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-left flex flex-col gap-2 md:gap-10 space-y-4"
        >
          <h1 className="text-3xl lg:text-6xl font-extrabold leading-relaxed lg:min-h-48 md:min-h-36">
            Hello! I&apos;m <br />
            <span className="bg-gradient-to-r from-[#007BFF] to-[#00d0ff] bg-clip-text text-transparent">
              <ReactTyped
                strings={[
                  "Youssef Tarfous,",
                  "a Full-Stack Developer",
                  "a Mobile Developer.",
                ]}
                typeSpeed={40}
                backSpeed={20}
                loop
              />
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            I&apos;m building scalable, secure, and high-performance apps that
            drive innovation and success.
          </p>
          {/* buttons Container */}
          <div className="relative flex flex-col lg:flex-row gap-5 items-center md:items-start lg:items-center justify-start md:mt-6 mt-3 group">
            {/* Contact Button */}
            <motion.a
              href="#contact"
              className="relative px-6 py-3 md:w-auto flex lg:hidden text-lg font-semibold text-white bg-gradient-to-tr from-[#007BFF] to-[#00d0ff] rounded-lg 
              items-center justify-around lg:w-full w-full md:min-w-60 transition-transform duration-300 "
            >
              <span className="text-center">Let&apos;s Connect</span>
              <motion.div className={`absolute flex items-center right-0`}>
                <ArrowUpRight className="w-10 h-10" />
              </motion.div>
            </motion.a>
            {/* View Project Button */}
            <Button
              styling=" w-full md:w-auto md:min-w-60 lg:min-w-60"
              bgColor="bg-transparent"
              color="text-[#007BFF]"
              borderColor="border-[#007BFF]"
              hoveredBgColor="bg-[#007BFF]"
              hoveredColor="text-[#03264a]"
              href="#viewprojects"
              text="View Projects"
            />
            {/* circular contact button */}
            <motion.a
              href="#contact"
              className="absolute hidden lg:flex cursor-pointer right-5 w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-[#007BFF] 
                        justify-center items-center overflow-hidden bg-gradient-to-tr from-[#007BFF] to-[#00d0ff] 
                        opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
            >
              <motion.svg
                className="absolute w-full h-full p-1 md:p-2 z-10"
                viewBox="0 0 300 300"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 13,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <defs>
                  <path
                    className="fill-none"
                    id="circlePath"
                    d="M150,150 m0,-130 a130,130 0 1,1 0,260 a130,130 0 1,1 0,-260"
                  />
                </defs>
                <text fill="#051c34">
                  <textPath xlinkHref="#circlePath" className="text-3xl">
                    Let&apos;s Connect • Work Together • Say Hello! •
                  </textPath>
                </text>
              </motion.svg>

              <motion.div
                className="absolute flex items-center justify-center"
                animate={{ scale: 1.1, rotate: 45 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ArrowUp className="w-24 h-24 rotate-0 text-[#051c34]" />
              </motion.div>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <Image
            src="/Hero-pic-main-icons.png"
            alt="Youssef Tarfous"
            width={1100}
            height={100}
            className="object-cover "
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
