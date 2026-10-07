import { Link } from "react-router-dom";
import { formatDate } from "../data/data";

export default function NewsCard({ article, saved, onToggleSave }) {
  const { id, title, category, author, date, image, summary } = article;
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-slate-200 flex flex-col">
      <Link to={`/news/${id}`}>
        <img src={image} alt={title} loading="lazy" className="h-44 w-full object-cover" />
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-sm font-semibold text-brand">{category}</span>
        <h3 className="text-lg font-bold leading-snug mt-1">
          <Link to={`/news/${id}`} className="hover:underline">{title}</Link>
        </h3>
        <p className="text-sm text-slate-600 mt-2 flex-1">{summary}</p>
        <div className="flex items-center justify-between mt-4 text-xs text-slate-500">
          <span>By {author}, {formatDate(date)}</span>
          {onToggleSave && (
            <button onClick={() => onToggleSave(id)} className="font-semibold text-brand">
              {saved ? "Saved" : "Save"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
