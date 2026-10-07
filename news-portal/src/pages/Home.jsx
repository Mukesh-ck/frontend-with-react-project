import { Link } from "react-router-dom";
import FeaturedNews from "../components/FeaturedNews";
import NewsList from "../components/NewsList";
import { articles, categories } from "../data/data";

export default function Home({ saved, onToggleSave }) {
  const featured = articles.filter((a) => a.featured);
  const latest = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
  return (
    <div className="space-y-10">
      <FeaturedNews articles={featured} />
      <section>
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-bold">Latest stories</h2>
          <Link to="/latest" className="text-brand font-semibold">See all news</Link>
        </div>
        <NewsList articles={latest} saved={saved} onToggleSave={onToggleSave} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Browse by category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {categories.map((c) => (
            <Link key={c} to={`/category/${c}`} className="bg-white border border-slate-200 rounded-lg p-4 text-center font-semibold hover:border-brand hover:text-brand">
              {c}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
