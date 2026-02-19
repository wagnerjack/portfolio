export default function Contact() {
  return (
    <section id="contact" className="py-14 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[680px] mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-6">
          Contact
        </h2>
        <p className="text-[15px] leading-relaxed text-[#222] mb-6">
          Feel free to reach out — whether it&apos;s about engineering, language
          systems, or anything else.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:jfwagner00@gmail.com"
            className="inline-flex items-center gap-2 text-sm border border-black px-4 py-2.5 hover:bg-black hover:text-white transition-colors duration-150"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            jfwagner00@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/jfwagner22/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm border border-black px-4 py-2.5 hover:bg-black hover:text-white transition-colors duration-150"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
