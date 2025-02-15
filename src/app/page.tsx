import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";
import Hero from "@/Components/UI/Hero";
export default function Home() {
  return (
    <div className="container py-4 grid items-center min-w-screen min-h-screen font-[family-name:var(--font-ibm-plex-mono)]">
      <Header />
      <main className="min-w-full min-h-screen flex flex-col gap-8 row-start-2 px-3 items-center sm:items-start">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
