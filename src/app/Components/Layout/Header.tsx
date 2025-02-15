import Image from "next/image";

export default function Header() {
  return (
    <header className="row-start-1 flex gap-6 flex-wrap items-center justify-between">
      <Image
        src="/Logo.png"
        alt="Next.js logo"
        width={64}
        height={64}
        priority
      />
      <nav className="flex gap-4">
        <ul className="flex gap-5">
          <li>
            <a href="#about" className="uppercase line-clamp-1">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
      <div>
        <button>Contact </button>
      </div>
    </header>
  );
}
