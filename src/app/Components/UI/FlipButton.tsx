"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export const timeProps = { DURATION: 0.25, STAGGER: 0.025 };

type Props = {
  children: string;
  onClick: () => void;
  className: string;
};

export const linkVariants = {
  hidden: { y: 0 },
  hover: { y: "-100%" }, // Desktop Hover Effect
  tap: { y: "-100%" }, // Mobile Tap Effect
};

export const otherLinkVariants = {
  hidden: { y: "100%" },
  hover: { y: "0%" }, // Desktop Hover Effect
  tap: { y: "0%" }, // Mobile Tap Effect
};

export default function FlipOnClickButton({
  children,
  onClick,
  className,
}: Props) {
  const [flipped, setFlipped] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures client-side rendering after initial render
  }, []);

  const handleTap = () => {
    setFlipped(!flipped);
  };

  if (!isClient) {
    return null; // Avoid rendering on the server
  }

  return (
    <motion.div
      className={`relative inline-block overflow-hidden whitespace-nowrap cursor-pointer ${className}`}
      onTouchStart={handleTap} // Mobile tap event
      onMouseEnter={() => setFlipped(true)} // Desktop hover start
      onMouseLeave={() => setFlipped(false)} // Desktop hover end
    >
      {/* Use a div instead of a button to avoid nested buttons */}
      <div
        onClick={onClick} // Click event
        className="relative z-10 cursor-pointer"
      >
        {/* First Layer */}
        <motion.div animate={flipped ? "tap" : "hidden"} whileHover="hover">
          {children.split(/( )/).map((letter, i) => (
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
              {letter === " " ? "\u00A0" : letter} {/* Non-breaking space */}
            </motion.span>
          ))}
        </motion.div>

        {/* Second Layer */}
        <motion.div
          className="absolute inset-0"
          animate={flipped ? "tap" : "hidden"}
          whileHover="hover"
        >
          {children.split(/( )/).map((letter, i) => (
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
              {letter === " " ? "\u00A0" : letter} {/* Non-breaking space */}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
// "use client";

// import { motion } from "framer-motion";
// import React, { useState, useEffect } from "react";

// export const timeProps = { DURATION: 0.25, STAGGER: 0.025 };

// type Props = {
//   children: string;
//   onClick: () => void;
//   className: string;
// };

// export const linkVariants = {
//   hidden: { y: 0 },
//   hover: { y: "-100%" }, // Desktop Hover Effect
//   tap: { y: "-100%" },   // Mobile Tap Effect
// };

// export const otherLinkVariants = {
//   hidden: { y: "100%" },
//   hover: { y: "0%" }, // Desktop Hover Effect
//   tap: { y: "0%" },   // Mobile Tap Effect
// };

// export default function FlipOnClickButton({ children, onClick, className }: Props) {
//   const [flipped, setFlipped] = useState(false);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true); // Ensures client-side rendering after initial render
//   }, []);

//   const handleTap = () => {
//     setFlipped(!flipped);
//   };

//   if (!isClient) {
//     return null; // Avoid rendering on the server
//   }

//   return (
//     <motion.div
//       className={`relative inline-block overflow-hidden whitespace-nowrap cursor-pointer ${className}`}
//       onTouchStart={handleTap} // Mobile tap event
//       onMouseEnter={() => setFlipped(true)} // Desktop hover start
//       onMouseLeave={() => setFlipped(false)} // Desktop hover end
//     >
//       {/* Use a div instead of a button to avoid nested buttons */}
//       <div
//         onClick={onClick} // Click event
//         className="relative z-10 cursor-pointer"
//       >
//         {/* First Layer */}
//         <motion.div animate={flipped ? "tap" : "hidden"} whileHover="hover">
//           {children.split("").map((letter, i) => (
//             <motion.span
//               className="inline-block"
//               variants={linkVariants}
//               transition={{
//                 duration: timeProps.DURATION,
//                 ease: "easeInOut",
//                 delay: timeProps.STAGGER * i,
//               }}
//               key={i}
//             >
//               {letter}
//             </motion.span>
//           ))}
//         </motion.div>

//         {/* Second Layer */}
//         <motion.div className="absolute inset-0" animate={flipped ? "tap" : "hidden"} whileHover="hover">
//           {children.split("").map((letter, i) => (
//             <motion.span
//               className="inline-block"
//               variants={otherLinkVariants}
//               transition={{
//                 duration: timeProps.DURATION,
//                 ease: "easeInOut",
//                 delay: timeProps.STAGGER * i,
//               }}
//               key={i}
//             >
//               {letter}
//             </motion.span>
//           ))}
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }
