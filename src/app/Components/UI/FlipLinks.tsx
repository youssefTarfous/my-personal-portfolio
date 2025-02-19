import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      href={href}
      className="relative inline-block cursor-pointer overflow-hidden"
      style={{
        lineHeight: 1.2,
      }}
      initial="hidden"
      whileHover="hovered"
    >
      {/* First Layer (Text before hover) */}
      <motion.div
        className="relative"
        variants={{
          hidden: { opacity: 1, y: 0 },
          hovered: { opacity: 0, y: "-100%" }, 
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
        }}
      >
        {children.split("").map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              hidden: { opacity: 1, y: 0 },
              hovered: { opacity: 0, y: "-100%" }, 
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Second Layer (Text after hover) */}
      <motion.div
        className="absolute inset-0"
        variants={{
          hidden: { opacity: 0, y: "100%" },  // Start below the container
          hovered: { opacity: 1, y: 0 },       // Moves to its original place
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
        }}
      >
        {children.split("").map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: "100%" },  // Starts below the container
              hovered: { opacity: 1, y: 0 },       // Moves up into place
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.a>
  );
};
