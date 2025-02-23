"use client";

import React, { useRef, useState, useCallback, RefObject } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

// Typing for the Navbar component props
interface NavbarProps {
  links: string[];
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return <SlideTabs links={links} />;
};

// Typing for the SlideTabs component props
interface SlideTabsProps {
  links: string[];
}

const SlideTabs: React.FC<SlideTabsProps> = ({ links }) => {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const [position, setPosition] = useState<{ left: number; width: number; opacity: number }>({
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
        <ScrollLink
          key={label}
          to={label.toLowerCase()}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Tab
            href={`#${label.toLowerCase()}`}
            setPosition={setPosition}
            containerRef={containerRef}
          >
            {label}
          </Tab>
        </ScrollLink>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

// Typing for the Tab component props
interface TabProps {
  children: string;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  containerRef: RefObject<HTMLUListElement>;
  href: string;
}

const Tab: React.FC<TabProps> = ({ children, setPosition, containerRef }) => {
  const ref = useRef<HTMLLIElement | null>(null);

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

// Typing for the Cursor component props
interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      initial={{ left: 0, width: 0, opacity: 0 }}
      animate={position}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="absolute top-0 bottom-0 my-auto h-7 rounded-full bg-[#004cff] md:h-12"
    />
  );
};

// import React, { useRef, useState, useCallback, RefObject } from "react";
// import { motion } from "framer-motion";
// import { Link as ScrollLink } from "react-scroll";

// export const Navbar = ({ links }: { links: string[] }) => {
//   return <SlideTabs links={links} />;
// };

// const SlideTabs = ({ links }: { links: string[] }) => {
//   const containerRef = useRef(null);
//   const [position, setPosition] = useState({
//     left: 0,
//     width: 0,
//     opacity: 0,
//   });

//   return (
//     <ul
//       ref={containerRef}
//       role="tablist"
//       onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
//       className="relative hidden lg:flex bg-[#06182d] gradient-navbar mx-auto w-fit rounded-full p-1"
//     >
//       {links.map((label) => (
//         <ScrollLink
//           key={label}
//           to={label.toLowerCase()}
//           spy={true}
//           smooth={true}
//           offset={-50}
//           duration={500}
//         >
//           <Tab
//             href={`#${label.toLowerCase()}`}
//             setPosition={setPosition}
//             containerRef={containerRef}
//           >
//             {label}
//           </Tab>
//         </ScrollLink>
//       ))}
//       <Cursor position={position} />
//     </ul>
//   );
// };

// const Tab = ({
//   children,
//   setPosition,
//   containerRef,
//   href,
// }: {
//   children: string;
//   setPosition: React.Dispatch<
//     React.SetStateAction<{ left: number; width: number; opacity: number }>
//   >;
//   containerRef: RefObject<HTMLUListElement>;
//   href: string;
// }) => {
//   const ref = useRef(null);

//   const handleMouseEnter = useCallback(() => {
//     if (!ref.current || !containerRef.current) return;

//     setPosition({
//       left: ref.current.offsetLeft,
//       width: ref.current.offsetWidth,
//       opacity: 1,
//     });
//   }, [setPosition, containerRef]);

//   return (
//     <li
//       ref={ref}
//       role="tab"
//       onMouseEnter={handleMouseEnter}
//       className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-[#007BFF] transition-colors duration-300 md:px-5 md:py-3 md:text-base hover:text-[#06182C]"
//     >
//       {children}
//     </li>
//   );
// };

// const Cursor = ({
//   position,
// }: {
//   position: {
//     left: number;
//     width: number;
//     opacity: number;
//   };
// }) => {
//   return (
//     <motion.li
//       initial={{ left: 0, width: 0, opacity: 0 }}
//       animate={position}
//       transition={{ type: "spring", stiffness: 200, damping: 20 }}
//       className="absolute top-0 bottom-0 my-auto h-7 rounded-full bg-[#004cff] md:h-12"
//     />
//   );
// };
