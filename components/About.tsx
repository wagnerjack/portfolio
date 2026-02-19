export default function About() {
  return (
    <section id="about" className="py-14 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[680px] mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-6">
          About
        </h2>
        <p className="text-[15px] leading-[1.75] text-[#222]">
          I&apos;m a software engineer at Bloomberg LP, where I work on the
          infrastructure that powers internationalization, localization, and
          translation across Bloomberg&apos;s products. My work sits at the
          intersection of distributed systems and human language — building the
          pipelines and caching layers that let software reach users in their
          native tongue, at scale, with low latency.
        </p>
        <p className="mt-4 text-[15px] leading-[1.75] text-[#222]">
          I studied Computer Science at Dartmouth College, graduating in 2022
          with minors in Neuroscience and Linguistics. That combination wasn&apos;t
          accidental — I&apos;ve always been drawn to how humans process and
          communicate information, and engineering felt like the natural way to
          apply that curiosity at scale. Working in i18n infrastructure lets me
          think about language not just as a feature, but as a core part of how
          software meets the world.
        </p>
      </div>
    </section>
  );
}
