
"use client";

import { motion } from "framer-motion";
import React from "react";

export const timeProps = {DURATION: 0.25,STAGGER:0.025}

type props = {
  children: string;
  href: string;
  className:string
};
export const linkVariants = {
  hidden: {
    y: 0,
  },
  whileHover: {
    y: "-100%",
  },
  visible: {},
};
export const otherLink = {
  hidden: {
    y: "100%",
  },
  whileHover: {
    y: 0,
  },
  visible: {},
};
export default function FlipText({ children, href,className }: props) {
  return (
    <motion.a
      initial="hidden"
      whileHover="whileHover"
      href={href}
      className={` relative block overflow-hidden whitespace-nowrap ${className}`}
    >
      <motion.div>
        {children.split("").map((letter, i) => {
          return (
            <motion.span
              className="inline-block"
              variants={linkVariants}
              transition={{
                duration: timeProps.DURATION,
                ease:"easeInOut",
                delay:timeProps.STAGGER
              }}
              key={i}
            >
              {letter}
            </motion.span>
          );
        })}
      </motion.div>
      <motion.div className="absolute inset-0">
        {children.split("").map((letter, i) => {
          return (
            <motion.span
              className="inline-block"
              variants={otherLink}
              transition={{
                duration: timeProps.DURATION,
                ease:"easeInOut",
                delay:timeProps.STAGGER * i
              }}
              key={i}
            >
              {letter}
            </motion.span>
          );
        })}
      </motion.div>
    </motion.a>
  );
}

