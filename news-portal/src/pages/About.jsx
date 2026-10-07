export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">About Himal Daily</h1>
      <p className="text-lg">Himal Daily is a demo news portal built as a final React project. It brings together stories on technology, sports, business, health and world affairs in one clean, fast-loading site.</p>
      <p>Readers can search stories, filter by category, open full articles and save the ones they want to read later. All articles shown here are sample content written for this project.</p>
      <h2 className="text-2xl font-bold pt-4">Our editorial team</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Anita Shrestha, Business editor</li>
        <li>Rohan Karki, Technology reporter</li>
        <li>Sujan Thapa, Sports correspondent</li>
        <li>Dr. Mina Gurung, Health writer</li>
        <li>Priya Sharma, World desk</li>
      </ul>
    </div>
  );
}
