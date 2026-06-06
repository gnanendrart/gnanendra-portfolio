export default function Footer() {
  return (
    <footer className="py-7 border-t border-white/5 bg-[#080c14]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs text-slate-700">
          Gnanendra Reddy &copy; 2026
        </span>
        <span className="text-slate-800 text-xs">
          Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
