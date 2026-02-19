export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-[680px] mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-medium tracking-tight">JW</span>
        <div className="flex gap-6 text-sm">
          <a
            href="#about"
            className="text-black hover:underline underline-offset-4"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-black hover:underline underline-offset-4"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-black hover:underline underline-offset-4"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
