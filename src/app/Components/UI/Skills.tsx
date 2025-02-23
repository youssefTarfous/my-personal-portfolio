"use client";
import { motion, Tween } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Javascript", path: "/icons/Javascript.svg" },
  { name: "TypeScript", path: "/icons/TypeScript.svg" },
  { name: "Next.js", path: "/icons/NextJs.svg" },
  { name: "NestJs", path: "/icons/NestJs.svg" },
  { name: "NodeJs", path: "/icons/NodeJs.svg" },
  { name: "MongoDB", path: "/icons/MongoDB.svg" },
  { name: "Express.js", path: "/icons/Express.svg" },
  { name: "Git", path: "/icons/Git.svg" },
  { name: "TailwindCss", path: "/icons/TailwindCss.svg" },
  { name: "GitHub", path: "/icons/Github.svg" },
  { name: "Python", path: "/icons/Python.svg" },
  { name: "MySQL", path: "/icons/MySql.svg" },
  { name: "PHP", path: "/icons/php.svg" },
  { name: "SQL", path: "/icons/SQL.svg" },
];

export default function SkillsSection() {
  const animateSkillsRef = useRef<Tween | null>(null);
  const tweenRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Set the container width dynamically
  useEffect(() => {
    // Calculate the container width based on icon width and number of items
    const iconWidth = 40; // Icon width
    const margin = 16; // Margin between icons
    const totalWidth = (skills.length * 2) * (iconWidth + margin); // Total width for the skills array duplicated
    setContainerWidth(totalWidth);

    // GSAP animation setup
    const animation = gsap.to(animateSkillsRef.current, {
      x: `-${totalWidth}`, // Move the animation based on the container width
      repeat: -1, // Repeat infinitely
      duration: 10, // Speed of the animation
      ease: "linear", // Smooth easing function
    });

    tweenRef.current = animation;

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="w-full bg-[#0a192f] py-16">
      <div className="container mx-auto flex flex-col gap-10 text-center">
        <h2 className="text-4xl font-bold text-white">My Skills</h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={animateSkillsRef}
            className="flex space-x-16"
            style={{ width: `${containerWidth}px` }} // Dynamically set the width
            onMouseEnter={() => {
              tweenRef.current.pause();
            }}
            onMouseLeave={() => {
              tweenRef.current.resume();
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center py-5 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <Image
                  src={skill.path}
                  width={40}
                  height={40}
                  alt={skill.name}
                  className="min-w-16 min-h-16 object-contain"
                />
                <span className="text-[#007BFF] shadow-blue text-lg mt-2">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
