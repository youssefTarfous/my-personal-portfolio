"use client";
import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";
import Hero from "@/Components/UI/Hero";
import ClickButton from "./Components/UI/ClickButton";
import CircularComp from "./Components/UI/CircularComp";
import About from "./Components/UI/About";
import { useEffect, useState } from "react";
import Heading from "./Components/UI/Heading";
import SkillsSection from "./Components/UI/Skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="md:py-4 py-2 font-[family-name:var(--font-ibm-plex-mono)]">
      <div className={`w-full sticky top-0 z-50 ${scrolling ? "bg-[#06182d]" : ""}`}>
        <Header />
      </div>

      <main className="overflow-hidden">
        <div className=" w-full min-h-[calc(100vh-62px)] flex flex-col gap-10 items-center sm:items-start">
          <div className="container flex flex-col gap-10 items-center sm:items-start">
            <Hero />
            <Heading sectionName="About Me" />
            <About />
          </div>
          <div className="w-full overflow-hidden bg-[#0a192f]">
            <SkillsSection />
          </div>
          <div className="container flex flex-col gap-10 items-center sm:items-start">
            <ClickButton />
            <CircularComp />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

//   return (
//     <div
//       className={`md:py-4 py-2 grid items-center min-w-screen font-[family-name:var(--font-ibm-plex-mono)] `}
//     >
//       <div
//         className={`w-full ${
//           scrolling ? "bg-[#06182d]" : "bg-transparent"
//         } top-0 sticky z-50`}
//       >
//         <Header />
//       </div>
//       <div className="min-w-full mx-auto">
//         <main className="min-w-full min-h-[calc(100vh-62px)] flex flex-col gap-8 row-start-2 items-center sm:items-start">
//           <Hero />
//           <Heading sectionName="About Me" />
//           <About />
//           <SkillsSection />
//           <ClickButton />
//           <CircularComp />
//           {/* <InfiniteScrollingHorizontal /> */}
//         </main>
//         <Footer />
//       </div>
//     </div>
//   );
// }
