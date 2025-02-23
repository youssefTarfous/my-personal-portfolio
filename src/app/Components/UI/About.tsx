import Image from "next/image";
import { FaGraduationCap, FaRocket, FaUser } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Tween } from "framer-motion";

export default function About() {
  const animateRef = useRef<Tween | null>(null);
  return (
    <section
      className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6"
      id="about"
    >
      {/* Image Section */}
      <div>
        <Image
          src="/about-me.png"
          alt="Youssef Tarfous"
          width={400}
          height={100}
          className="object-cover mx-auto lg:container"
          priority
        />
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col items-center justify-center md:gap-10 gap-5">
        {/* Who am I? */}
        <div className="w-full">
          <h3 className="text-3xl font-semibold flex items-center gap-2">
            <FaUser className="text-blue-500" /> Who am I?
          </h3>
          <p className="mt-4 text-gray-400 leading-relaxed">
            I am{" "}
            <span className="text-white glow-white text-2xl glow-white md:text-4xl font-semibold">
              Youssef Tarfous
            </span>
            , a software developer with a background in
            <span className="text-white text-lg mx-2 font-semibold">
              IT Development
            </span>
            from Institut CIEL. My passion for technology drives me to keep
            learning and building impactful solutions.
          </p>

          <p className="mt-2 text-gray-400">
            I actively work on projects using{" "}
            <span className="text-white text-md md:text-2xl font-extrabold glow-blue">
              Next.js
            </span>
            ,
            <span className="text-white text-md md:text-2xl font-extrabold glow-green">
              MERN stack
            </span>
            , and
            <span className="text-white ml-2 text-md md:text-2xl font-extrabold glow-indigo">
              React Native
            </span>{" "}
            to sharpen my skills while exploring new technologies and expanding
            my expertise.
          </p>
        </div>

        {/* Experience and Studying */}
        <div className="w-full flex gap-5 flex-col md:flex-row">
          <div className="w-full">
            <h3 className="text-3xl font-semibold flex justify-center md:justify-start md:text-justify items-center gap-2">
              <FaGraduationCap className="text-[#00ffff]" /> My Experience
            </h3>
            <p className="mt-2 text-gray-400">
              I actively work on projects using
              <span className="mx-1 text-blue-500 font-extrabold">Next.js</span>
              ,
              <span className="mx-1 text-green-500 font-extrabold">
                MERN stack
              </span>
              , and
              <span className="mx-1 text-indigo-500 font-extrabold">
                React Native
              </span>
              to sharpen my skills while exploring new technologies and
              expanding my expertise.
            </p>

            <p className="mt-2 text-gray-400">
              Currently seeking an apprenticeship in{" "}
              <strong>IT Development in Germany</strong>.
            </p>
          </div>

          {/* Goals in the Future */}
          <div className="w-full">
            <h3 className="text-3xl font-semibold flex items-center justify-center gap-2">
              <FaRocket className="text-red-500" /> My Goals
            </h3>
            <p className="mt-4 text-gray-400">
              My goal is to become a top-tier full-stack developer and
              cybersecurity expert, merging AI, security, and cloud computing
              into my work. I want to contribute to open-source projects and
              build secure, intelligent applications that shape the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
