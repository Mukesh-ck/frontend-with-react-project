import { Link } from "react-router-dom";
import { categories } from "../data/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-white font-bold">Himal Daily</p>
          <p className="text-sm mt-2">Clear, quick and reliable news from Nepal and the world.</p>
        </div>
        <div>
          <p className="font-semibold text-white mb-2">Categories</p>
          <ul className="space-y-1 text-sm">
            {categories.map((c) => (
              <li key={c}><Link className="hover:text-white" to={`/category/${c}`}>{c}</Link></li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white mb-2">Contact</p>
          <p>news@himaldaily.example</p>
          <p>Kathmandu, Nepal</p>
        </div>
      </div>
      <p className="text-center text-xs py-3 border-t border-slate-700">© 2026 Himal Daily. Student project.</p>
    </footer>
  );
}
