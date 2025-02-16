// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ReactTyped } from "react-typed";

// export default function Hero() {
//   return (
//     <section className="relative flex items-center w-full min-h-[calc(100vh-62px)] text-white">
//       <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">

//         {/* Text Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-center md:text-left space-y-16"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-relaxed">
//             Hello! <br />
//             I&apos;m{" "}
//             <span className="bg-gradient-to-r from-[#007BFF] to-[#00d0ff] bg-clip-text text-transparent">
//               <ReactTyped
//                 strings={[
//                   "Youssef Tarfous",
//                   "a Full-Stack",
//                   "Mobile Developer",
//                 ]}
//                 typeSpeed={40}
//                 backSpeed={20}
//                 loop
//               />
//             </span>
//           </h1>
//           <p className="space-y-2 text-gray-300 text-lg md:text-xl">
//             I&apos;m building scalable, secure, and high-performance apps that drive innovation and success.
//           </p>
//         </motion.div>

//         {/* Image Section */}
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="relative w-full md:w-auto flex justify-center"
//         >
//           <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
//             <Image
//               src="/Hero-picture.png"
//               alt="Youssef Tarfous"
//               width={1080}
//               height={100}
//               className="w-full h-auto object-contain"
//               priority
//             />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section className="relative mt-2 flex items-center w-full min-h-[calc(100vh-62px)] text-white">
      <div className="flex flex-col md:flex-row sm:items-center h-full justify-between  w-full max-w-6xl mx-auto rounded-s-md shadow-lg">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-left flex flex-col gap-2 md:gap-10 space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-relaxed">
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
          <p className="mt-4 text-gray-300 text-lg md:text-xl">
         {/*    I build scalable, secure, and high-performance applications that
            bring innovation to life. Ready to create something amazing? */}
            I&apos;m building scalable, secure, and high-performance apps that drive innovation and success. 
          </p>
          <div className="mt-6 flex flex-col md:flex-row md:gap-8 gap-4">
            <a
              href="#projects"
              className="px-6 py-3 text-lg font-semibold rounded-lg bg-gradient-to-tr from-[#007BFF] to-[#00d0ff] hover:bg-gradient-to-tr  hover:from-[#0070e8] hover:to-[#00B7E0] transition duration-300 shadow-md"
            >
               Let&apos;s connect!
            </a>

            {/* Secondary Button - Connect */}
            <a
              href="#contact"
              className="px-6 py-3 text-lg font-semibold rounded-lg border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white transition duration-300 shadow-md"
            >
              View Projects
            
            </a>
          </div>

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
            width={1100}
            height={100}
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
