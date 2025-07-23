'use client';

import { useState } from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#0f172a] text-white font-mono px-6 py-4 border-t border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="space-y-1 text-white/60">
          <p>© IcarusUK.dev {year}</p>
          <p>Version: 1.0.3</p>
          <p>Published: 23 July 2025</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/cv.pdf"
            download
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-2 rounded-xl transition"
          >
            Download CV
          </a>
          <button
            onClick={() => setShowModal(true)}
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2 rounded-xl border border-white/20"
          >
            View Changelog
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#1e293b] w-full max-w-4xl p-6 rounded-xl shadow-lg relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">Changelog & Planned Updates</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80 text-sm font-mono">
              <div>
                <h3 className="text-lg font-bold mb-2">Changelog</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">v1.0.3</p>
                    <ul className="list-disc list-inside">
                      <li>Sticky timeline titles</li>
                      <li>Added changelog modal</li>
                      <li>Floating footer</li>
                      <li>Updated CV download file</li>
                    </ul>
                  </li>
                  <li>
                    <p className="font-semibold">v1.0.2</p>
                    <ul className="list-disc list-inside">
                      <li>Added form functionality via Formspree</li>
                    </ul>
                  </li>
                  <li>
                    <p className="font-semibold">v1.0.1</p>
                    <ul className="list-disc list-inside">
                      <li>General bug fixes</li>
                      <li>Tweaks to animation for performance</li>
                      <li>Fixed ESLint errors for deployment</li>
                    </ul>
                  </li>
                  <li>
                    <p className="font-semibold">v1.0.0</p>
                    <ul className="list-disc list-inside">
                      <li>Initial deployment to GitHub and Vercel</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">Planned Updates</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Dark/light theme toggle</li>
                  <li>Improved timeline alignment accuracy (full re-write)</li>
                  <li>Mobile timeline compatibility</li>
                  <li>Downloadable/Modal project case studies</li>
                  <li>Real-time contact form confirmation</li>
                  <li>Improved skills hover with outline of projects applicable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
