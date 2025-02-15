import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
      <h1>hero</h1>
      <Image
        src="/Logo.png"
        alt="Next.js logo"
        width={64}
        height={64}
        priority
      />
    </section>
  );
}
