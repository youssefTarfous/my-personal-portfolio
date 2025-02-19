'use client'
import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";
import Hero from "@/Components/UI/Hero";
import ClickButton from "./Components/UI/ClickButton";
import CircularComp from "./Components/UI/CircularComp";
export default function Home() {
  return (
    <div className="md:py-4 py-2 grid items-center min-w-screen font-[family-name:var(--font-ibm-plex-mono)]">
    <Header />
    <div className="container ">
      <main className="min-w-full min-h-[calc(100vh-62px)] flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Hero />
      <ClickButton />
      <CircularComp />
      </main>
      <Footer />
    </div>
    </div>
  );
}
