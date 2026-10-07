import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryMenu from "../components/CategoryMenu";
import NewsList from "../components/NewsList";
import { articles } from "../data/data";

export default function LatestNews({ saved, onToggleSave }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [savedOnly, setSavedOnly] = useState(false);

  const results = articles
    .filter((a) => category === "All" || a.category === category)
    .filter((a) => `${a.title} ${a.author}`.toLowerCase().includes(query.toLowerCase()))
    .filter((a) => !savedOnly || saved.includes(a.id))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">Latest News</h1>
      <SearchBar value={query} onChange={setQuery} />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <CategoryMenu active={category} onSelect={setCategory} />
        <label className="flex items-center gap-2 text-sm font-medium">
          <input type="checkbox" checked={savedOnly} onChange={(e) => setSavedOnly(e.target.checked)} />
          Saved stories only ({saved.length})
        </label>
      </div>
      <NewsList articles={results} saved={saved} onToggleSave={onToggleSave} />
    </div>
  );
}
