import { categories } from "../data/data";

export default function CategoryMenu({ active, onSelect, showAll = true }) {
  const items = showAll ? ["All", ...categories] : categories;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className={`px-4 py-1.5 rounded-full border text-sm font-medium ${
            active === c ? "bg-brand border-brand text-white" : "bg-white border-slate-300 hover:border-brand"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
