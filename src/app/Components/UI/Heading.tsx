import React from "react";
import { motion } from "framer-motion";
export default function Heading({ sectionName }: { sectionName: string }) {
  return (
    <motion.div
      className="text-center w-full py-1 md:py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl  sm:text-5xl md:text-6xl lg:text-8xl text-center w-full font-bold text-white">
        {sectionName}
      </h2>
    </motion.div>
  );
}
