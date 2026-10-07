import { useParams, Link } from "react-router-dom";
import NewsList from "../components/NewsList";
import { articles, formatDate } from "../data/data";

export default function NewsDetails({ saved, onToggleSave }) {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="text-center py-16">
        <p className="mb-4">This story could not be found.</p>
        <Link to="/latest" className="text-brand font-semibold">Back to latest news</Link>
      </div>
    );
  }

  const related = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3);

  return (
    <div className="space-y-10">
      <article className="max-w-3xl mx-auto">
        <Link to={`/category/${article.category}`} className="text-brand font-semibold">{article.category}</Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-1">{article.title}</h1>
        <p className="text-slate-500 mt-2">By {article.author}, {formatDate(article.date)}</p>
        <img src={article.image} alt={article.title} className="w-full rounded-lg mt-5" />
        <div className="mt-5 space-y-4 text-lg leading-relaxed">
          {article.content.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <button onClick={() => onToggleSave(article.id)} className="mt-6 border border-brand text-brand font-semibold px-4 py-2 rounded-lg">
          {saved.includes(article.id) ? "Remove from saved" : "Save this story"}
        </button>
      </article>
      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">More in {article.category}</h2>
          <NewsList articles={related} saved={saved} onToggleSave={onToggleSave} />
        </section>
      )}
    </div>
  );
}
