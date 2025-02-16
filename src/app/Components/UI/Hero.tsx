"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section className="relative flex items-center w-full min-h-[calc(100vh-62px)] text-white">
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-6xl mx-auto p-4 rounded-s-md shadow-lg">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hello! <br />
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#007BFF] to-[#00d0ff] bg-clip-text text-transparent">
              <ReactTyped
                strings={[
                  "Youssef Tarfous",
                  "a Full-Stack",
                  "Mobile Developer",
                ]}
                typeSpeed={40}
                backSpeed={20}
                loop
              />
            </span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg md:text-xl">
            I&apos;m building scalable, secure, and high-performance apps that drive innovation and success.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/Hero-picture.png" // Ensure this is in your /public folder
            alt="Youssef Tarfous"
            width={1000}
            height={100}
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

