
//latest code 
"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function RotatingButton() {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
      <motion.button
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative w-40 h-40 md:w-64 md:h-64 rounded-full border-2 hover:border-none border-[#007BFF] flex justify-center items-center 
                   overflow-hidden"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        whileHover={{ scale: 1.1 }}
        onClick={() => console.log("Button clicked")}
      >
        {/* Rotating Text */}
        <motion.svg
          className="absolute w-full h-full p-1 z-10 md:p-3"
          viewBox="0 0 300 300"
          animate={{ rotate: 360 }}
          transition={{
            duration: 13,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <defs fill="#051c34">
            <path
              className="stroke-[#051c34] stroke-2"
              id="circlePath"
              d="M150,150 m0,-130 a130,130 0 1,1 0,260 a130,130 0 1,1 0,-260"
            />
          </defs>
          <text fill={isHover ? "#051c34" : "#ffffff"}>
            <textPath xlinkHref="#circlePath" className={`${isHover ? "" : "hidden"} text-3xl`}>
              Get in Touch • Get in Touch • Get in Touch •
            </textPath>
          </text>
        </motion.svg>

        {/* Scaling Background for the Text */}
        <motion.div
          className="absolute w-full h-full   bg-gradient-to-tr from-[#007BFF] to-[#00d0ff] overflow-hidden rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: isHover ? 1.2 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {/* Arrow in the Center */}
        <motion.div
          className="absolute flex items-center justify-center"
          animate={{
            scale: isHover ? 1.1 : 1,
            rotate: isHover ? 45 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ArrowUpRight
            className={`md:w-36 md:h-36 w-24 h-24 ${
              isHover ? "text-[#051c34]" : "text-[#007BFF]"
            }`}
          />
        </motion.div>
      </motion.button>
  );
}
