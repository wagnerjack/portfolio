export default function Experience() {
  return (
    <section id="experience" className="py-14 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[680px] mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-8">
          Experience
        </h2>

        {/* Work */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
            <div>
              <h3 className="text-base font-semibold">Software Engineer</h3>
              <p className="text-sm text-[#555]">Bloomberg LP</p>
            </div>
            <span className="text-sm text-[#888] shrink-0">2022 — Present</span>
          </div>
          <p className="text-[14px] leading-relaxed text-[#333] mb-3">
            Member of the Internationalization (i18n) infrastructure team,
            responsible for the systems that deliver translated content to
            Bloomberg&apos;s global products in real time.
          </p>
          <ul className="space-y-2">
            {[
              "Build and maintain distributed, low-latency caching systems for runtime translation delivery",
              "Modernized text encoding by implementing UTF-8 support, enabling broader language coverage across the platform",
              "Partner with product and translation teams to onboard new languages for emerging markets",
            ].map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-[14px] leading-relaxed text-[#333]"
              >
                <span className="mt-[6px] w-1 h-1 rounded-full bg-black shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="pt-8 border-t border-[#e5e5e5]">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-8">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <h3 className="text-base font-semibold">Dartmouth College</h3>
              <p className="text-sm text-[#555]">
                B.A. Computer Science — Minors in Neuroscience &amp; Linguistics
              </p>
            </div>
            <span className="text-sm text-[#888] shrink-0">Class of &apos;22</span>
          </div>
        </div>
      </div>
    </section>
  );
}
