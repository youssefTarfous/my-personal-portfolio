"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";


export const Navbar = ({links}: {links: string[]}) => {
  return <SlideTabs links={links}/>;
};

const SlideTabs = ({links}:{links:string[]}) => {
  const containerRef = useRef(null); // Reference for the navbar container
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
      <ul
        ref={containerRef}
        role="tablist"
        onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
        className="relative hidden lg:flex bg-[#06182d] gradient-navbar mx-auto w-fit rounded-full p-1"
      >
        {links.map((label) => (
          <Tab key={label} setPosition={setPosition} containerRef={containerRef}>
           {label}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>
  );
};

const Tab = ({ children, setPosition, containerRef }) => {
  const ref = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (!ref.current || !containerRef.current) return;

    setPosition({
      left: ref.current.offsetLeft,
      width: ref.current.offsetWidth,
      opacity: 1,
    });
  }, [setPosition, containerRef]);

  return (
    <li
      ref={ref}
      role="tab"
      onMouseEnter={handleMouseEnter}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-[#007BFF] transition-colors duration-300 md:px-5 md:py-3 md:text-base hover:text-[#06182C]"
    >
      {children}
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}) => {
  return (
    <motion.li
      initial={{ left: 0, width: 0, opacity: 0 }}
      animate={position}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="absolute top-0 bottom-0 my-auto h-7 rounded-full bg-[#004cff] md:h-12"
    />
  );
};