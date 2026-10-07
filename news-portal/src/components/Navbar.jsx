import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/latest", label: "Latest News" },
  { to: "/category/Tech", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded font-medium ${isActive ? "bg-brand text-white" : "hover:bg-slate-100"}`;

  return (
    <header className="bg-white border-b-4 border-brand sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-bold">Himal Daily</Link>
        <button className="md:hidden border rounded px-3 py-1" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav className="hidden md:flex gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="md:hidden px-4 pb-3" onClick={() => setOpen(false)}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
