import { Link } from "react-router-dom";
import { formatDate } from "../data/data";

export default function FeaturedNews({ articles }) {
  const [main, ...rest] = articles;
  if (!main) return null;
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <Link to={`/news/${main.id}`} className="lg:col-span-2 relative block rounded-lg overflow-hidden group">
        <img src={main.image} alt={main.title} className="w-full h-72 md:h-96 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5 text-white">
          <span className="text-sm font-semibold bg-brand self-start px-2 py-0.5 rounded">{main.category}</span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 group-hover:underline">{main.title}</h2>
          <p className="text-sm mt-2">By {main.author}, {formatDate(main.date)}</p>
        </div>
      </Link>
      <div className="flex flex-col gap-4">
        {rest.map((a) => (
          <Link key={a.id} to={`/news/${a.id}`} className="flex gap-3 bg-white border border-slate-200 rounded-lg p-3 hover:border-brand">
            <img src={a.image} alt="" className="w-24 h-20 object-cover rounded" />
            <div>
              <span className="text-xs font-semibold text-brand">{a.category}</span>
              <h3 className="font-bold leading-snug">{a.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{formatDate(a.date)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
