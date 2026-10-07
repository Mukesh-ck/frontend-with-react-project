import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LatestNews from "./pages/LatestNews";
import Category from "./pages/Category";
import NewsDetails from "./pages/NewsDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [saved, setSaved] = useState([]);
  const onToggleSave = (id) =>
    setSaved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const shared = { saved, onToggleSave };

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8 min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home {...shared} />} />
          <Route path="/latest" element={<LatestNews {...shared} />} />
          <Route path="/category/:name" element={<Category {...shared} />} />
          <Route path="/news/:id" element={<NewsDetails {...shared} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
