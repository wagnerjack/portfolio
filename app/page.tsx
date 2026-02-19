import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RubiksCube from "@/components/RubiksCube";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <RubiksCube />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 px-6 border-t border-[#e5e5e5]">
        <div className="max-w-[680px] mx-auto text-xs text-[#aaa]">
          © {new Date().getFullYear()} Jack Wagner
        </div>
      </footer>
    </>
  );
}
