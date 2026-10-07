import NewsCard from "./NewsCard";

export default function NewsList({ articles, saved = [], onToggleSave }) {
  if (articles.length === 0) {
    return (
      <p className="text-center py-12 text-slate-600">
        No stories match your search. Try another keyword or category.
      </p>
    );
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => (
        <NewsCard key={a.id} article={a} saved={saved.includes(a.id)} onToggleSave={onToggleSave} />
      ))}
    </div>
  );
}
