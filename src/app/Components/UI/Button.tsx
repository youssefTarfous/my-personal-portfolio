import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  color: string;
  bgColor: string;
  hoveredColor: string;
  hoveredBgColor: string;
  text: string;
  href: string;
  styling:string;
  borderColor: string;
};

export default function Button({
  color,
  bgColor,
  borderColor,
  hoveredColor,
  styling,
  hoveredBgColor,
  text,
  href,
}: Props) {
  const [hover, sethover] = useState<boolean>(false);
  return (
    <motion.a
      href={href}
      whileHover={{ scaleX: 1.1, scaleY: 1.05 }}
      className={`flex lg:px-8 px-4 py-3 lg:text-lg  text-center font-semibold ${styling} rounded-lg justify-center items-center border-solid border-2 ${borderColor} px-10 ${bgColor} rounded-full cursor-pointer p-4 gap-2 relative overflow-clip`}
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
    >
      <motion.div
        className={`w-2 h-2 ${hoveredBgColor} hidden md:block absolute rounded-lg left-2`}
        variants={{
          initial: {
            scale: 1,
          },
          hover: {
            scale: 100,
          },
        }}
        animate={hover ? "hover" : "initial"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
      {
        <motion.div
          className={`text-lg font-normal z-50`}
          variants={{
            initial: {
              x: -8,
            },
            hover: {
              x: -16,
            },
          }}
          animate={hover ? "hover" : "initial"}
        >
          <p className={`${hover ? `${hoveredColor}` : `${color}`}`}>{text}</p>
        </motion.div>
      }
      <motion.div className={`absolute flex items-center right-0`}>
        <ArrowRight className={`w-8 h-8 ${hover ? `${hoveredColor}` : `${color}`}` } />
      </motion.div>
    </motion.a>
  );
}
