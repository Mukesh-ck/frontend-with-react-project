import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) err.message = "Write at least 10 characters.";
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  const field = "w-full border border-slate-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-brand";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {sent && <p className="bg-green-100 text-green-800 rounded p-3">Message sent. We will reply within two days.</p>}
      <div>
        <label className="block font-medium mb-1" htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} className={field} />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className="block font-medium mb-1" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={field} />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block font-medium mb-1" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} className={field} />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
      </div>
      <button className="bg-brand text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90">Send message</button>
    </form>
  );
}
