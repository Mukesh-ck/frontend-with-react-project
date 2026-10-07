import { useParams, useNavigate } from "react-router-dom";
import CategoryMenu from "../components/CategoryMenu";
import NewsList from "../components/NewsList";
import { articles } from "../data/data";

export default function Category({ saved, onToggleSave }) {
  const { name } = useParams();
  const navigate = useNavigate();
  const list = articles.filter((a) => a.category === name);
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">{name} news</h1>
      <CategoryMenu active={name} showAll={false} onSelect={(c) => navigate(`/category/${c}`)} />
      <NewsList articles={list} saved={saved} onToggleSave={onToggleSave} />
    </div>
  );
}
