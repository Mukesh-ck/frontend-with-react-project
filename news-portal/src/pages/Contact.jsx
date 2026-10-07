import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Contact us</h1>
      <p>Send a news tip, correction or question to the newsroom.</p>
      <ContactForm />
    </div>
  );
}
