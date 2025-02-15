"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

// export default function HeroSection() {
//   return (
//     <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#007BFF] to-[#001F3F] text-white">
//       {/* Blurred Background Shape */}
//       <div className="absolute w-80 h-80 bg-white rounded-full blur-3xl opacity-20 top-10 left-1/4"></div>

//       {/* Floating Profile Image */}
//       <motion.div
//         initial={{ y: 0 }}
//         animate={{ y: [0, -10, 0] }}
//         transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//         className="relative flex justify-center"
//       >
//         <div className="relative p-2 bg-gradient-to-r from-[#007BFF] to-[#001F3F] rounded-full">
//           <Image
//             src="/your-image.png" // Replace with your image path
//             alt="Your Name"
//             width={200}
//             height={200}
//             className="rounded-full shadow-lg"
//             priority
//           />
//         </div>
//       </motion.div>

//       {/* Hero Text */}
//       <h1 className="mt-6 text-3xl md:text-5xl font-bold">
//         Hi, I &apos;' &apos; m <span className="text-[#F5F5F5]">Youssef</span> 👋
//       </h1>
//       <p className="mt-2 text-lg md:text-xl text-gray-200">
//         A MERN Developer & Tech Enthusiast
//       </p>

//       {/* Call-to-Action Buttons */}
//       <div className="mt-6 flex space-x-4">
//         <motion.a
//           href="#projects"
//           whileHover={{ scale: 1.1 }}
//           className="px-6 py-3 bg-white text-[#001F3F] font-semibold rounded-lg shadow-lg"
//         >
//           See My Work
//         </motion.a>
//         <motion.a
//           href="#contact"
//           whileHover={{ scale: 1.1 }}
//           className="px-6 py-3 border border-white text-white font-semibold rounded-lg shadow-lg"
//         >
//           Contact Me
//         </motion.a>
//       </div>
//     </section>
//   );
// }

// export default function Hero() {
//   return (
//     <section className="relative min-w-full grid grid-cols-2 md:grid-cols-3 items-center justify-center h-screen  text-white">
//       {/* Blurred Background Shape */}
//       <div className="absolute w-80 h-80 bg-white rounded-full blur-3xl opacity-20 top-10 left-1/4"></div>
//       {/* Hero Text */}
//       <div className="md:col-span-2">
//         <h1 className="mt-6 text-3xl md:text-5xl font-bold">
//           Hi, I&apos;m <span className="text-[#F5F5F5]">Youssef</span>{" "}
//           👋
//         </h1>
//         <p className="mt-2 text-lg md:text-xl text-gray-200">
//           A MERN Developer & Tech Enthusiast
//         </p>
//       </div>
//       {/* Floating Profile Image */}
//       <motion.div
//         initial={{ y: 0 }}
//         animate={{ y: [0, -10, 0] }}
//         transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//         className="relative  w-full flex justify-center"
//       >
//         <div className="relative min-w-full min-h-full rounded-full">
//           <Image
//             src="/hero-pic-bg-removed.png" // Replace with your image path
//             alt="Your Name"
//             width={2000}
//             height={600}
//             className="rounded-full shadow-lg"
//             priority
//           />
//         </div>
//       </motion.div>

//       {/* Call-to-Action Buttons */}
//       <div className="mt-6 flex space-x-4">
//         <motion.a
//           href="#projects"
//           whileHover={{ scale: 1.1 }}
//           className="px-6 py-3 bg-white text-[#001F3F] font-semibold rounded-lg shadow-lg"
//         >
//           See My Work
//         </motion.a>
//         <motion.a
//           href="#contact"
//           whileHover={{ scale: 1.1 }}
//           className="px-6 py-3 border border-white text-white font-semibold rounded-lg shadow-lg"
//         >
//           Contact Me
//         </motion.a>
//       </div>
//     </section>
//   );
// }

export default function Hero() {
  return (
    <section className="relative  flex items-center  w-full min-h-[calc(100vh-62px)] text-white">
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-6xl mx-auto rounded-s-md shadow-lg">
        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hello! <br />
            
            I&apos;m <span className="text-[#007BFF]"><ReactTyped
              strings={[
                "Youssef Tarfous",
                "a Full-Stack",
                "Mobile Developer",
              ]}
              typeSpeed={40}
              backSpeed={20}
              loop
            /></span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg md:text-xl">
            I&apos;m building
            scalable, secure, and high-performance apps that drive innovation
            and success
          </p>
        </div>
        <div>
          <Image
            src="/heroPic.png" // Make sure this is in /public
            alt="Youssef Tarfous"
            width={780}
            height={100}
            className=" "
            priority
          />
        </div>
      </div>
    </section>
  );
}

// <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
//   <h1>hero</h1>
//   <motion.div
//     initial={{ y: 0 }}
//     animate={{ y: [0, -10, 0] }}
//     transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//     className="relative flex justify-center"
//   >
//     <div className="relative p-2 bg-gradient-to-r from-[#007BFF] to-[#001F3F] rounded-full">
//       <Image
//         src="/your-image.png" // Replace with your image path
//         alt="Your Name"
//         width={200}
//         height={200}
//         className="rounded-full shadow-lg"
//         priority
//       />
//     </div>
//   </motion.div>
//   <Image
//     src="/hero-pic-bg-removed.png"
//     alt="Next.js logo"
//     width={500}
//     height={60}
//     priority
//   />
// </section>
