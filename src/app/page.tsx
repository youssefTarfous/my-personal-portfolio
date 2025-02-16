import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";
import Hero from "@/Components/UI/Hero";
export default function Home() {
  return (
    <div className="container py-4 grid items-center min-w-screen font-[family-name:var(--font-ibm-plex-mono)]">
      <Header />
      <main className="min-w-full min-h-[calc(100vh-62px)] flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
