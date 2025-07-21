'use client';

export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  const publishedDate = now.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }); // e.g., "20 July 2025"

  return (
    <footer className="w-full bg-[#0f172a] text-white font-mono px-6 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="space-y-1 text-white/60">
          <p>© IcarusUK.dev {year}</p>
          <p>Version: 1.0.0</p>
          <p>Published: 21/07/2025</p>
        </div>

        <a
          href="/cv.pdf"
          download
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-2 rounded-xl transition"
        >
          Download CV
        </a>
      </div>
    </footer>
  );
}
