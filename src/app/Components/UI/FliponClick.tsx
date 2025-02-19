"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

export const timeProps = { DURATION: 0.25, STAGGER: 0.025 };

type Props = {
  children: string;
  href: string;
  className?: string; // Made optional
};

export const linkVariants = {
  hidden: { y: 0 },
  hover: { y: "-100%" },
  tap: { y: "-100%" },
};

export const otherLinkVariants = {
  hidden: { y: "100%" },
  hover: { y: "0%" },
  tap: { y: "0%" },
};

export default function FlipOnClick({ children, href, className = "" }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.a
      href={href}
      className={`relative block overflow-hidden cursor-pointer px-4 py-2 text-white uppercase transition ${className}`}
      onTouchStart={() => setFlipped(true)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* First Layer */}
      <motion.div animate={flipped ? "tap" : "hidden"} whileHover="hover">
        {children.split("").map((letter, i) => (
          <motion.span
            className="inline-block"
            variants={linkVariants}
            transition={{
              duration: timeProps.DURATION,
              ease: "easeInOut",
              delay: timeProps.STAGGER * i,
            }}
            key={i}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Second Layer */}
      <motion.div
        className="absolute inset-0 text-blue-400"
        animate={flipped ? "tap" : "hidden"}
        whileHover="hover"
      >
        {children.split("").map((letter, i) => (
          <motion.span
            className="inline-block"
            variants={otherLinkVariants}
            transition={{
              duration: timeProps.DURATION,
              ease: "easeInOut",
              delay: timeProps.STAGGER * i,
            }}
            key={i}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.a>
  );
}







// "use client";

// import { motion } from "framer-motion";
// import React, { useState } from "react";

// export const timeProps = { DURATION: 0.25, STAGGER: 0.025 };

// type Props = {
//   children: string;
//   href: string;
//   className: string;
// };

// export const linkVariants = {
//   hidden: { y: 0 },
//   hover: { y: "-100%" }, // Desktop Hover Effect
//   tap: { y: "-100%" }, // Mobile Tap Effect
// };

// export const otherLinkVariants = {
//   hidden: { y: "100%" },
//   hover: { y: "0%" }, // Desktop Hover Effect
//   tap: { y: "0%" }, // Mobile Tap Effect
// };

// export default function FlipOnClick({ children, href, className }: Props) {
//   const [flipped, setFlipped] = useState(false);

//   const handleTap = () => {
//     setFlipped(!flipped);
//   };

//   return (
//     <motion.a
//       href={href}
//       className={`relative block overflow-hidden whitespace-nowrap cursor-pointer ${className}`}
//       onTouchStart={handleTap} // Mobile tap event
//       onMouseEnter={() => setFlipped(true)} // Desktop hover start
//       onMouseLeave={() => setFlipped(false)} // Desktop hover end
//     >
//       {/* First Layer */}
//       <motion.div animate={flipped ? "tap" : "hidden"} whileHover="hover">
//         {children.split("").map((letter, i) => (
//           <motion.span
//             className="inline-block"
//             variants={linkVariants}
//             transition={{
//               duration: timeProps.DURATION,
//               ease: "easeInOut",
//               delay: timeProps.STAGGER * i,
//             }}
//             key={i}
//           >
//             {letter}
//           </motion.span>
//         ))}
//       </motion.div>

//       {/* Second Layer */}
//       <motion.div
//         className="absolute inset-0"
//         animate={flipped ? "tap" : "hidden"}
//         whileHover="hover"
//       >
//         {children.split("").map((letter, i) => (
//           <motion.span
//             className="inline-block"
//             variants={otherLinkVariants}
//             transition={{
//               duration: timeProps.DURATION,
//               ease: "easeInOut",
//               delay: timeProps.STAGGER * i,
//             }}
//             key={i}
//           >
//             {letter}
//           </motion.span>
//         ))}
//       </motion.div>
//     </motion.a>
//   );
// }
