const img = (seed) => `https://picsum.photos/seed/${seed}/900/560`;

export const categories = ["Tech", "Sports", "Business", "Health", "World"];

export const articles = [
  { id: 1, title: "Nepal's startup scene gets its largest funding round yet", category: "Business", author: "Anita Shrestha", date: "2026-09-28", image: img("startup"), featured: true,
    summary: "A Kathmandu fintech closes a record seed round, signalling growing investor confidence.",
    content: "A Kathmandu-based fintech company has closed the largest seed round in the country's startup history, drawing investors from South Asia and beyond.\n\nFounders say the money will go into hiring engineers and expanding digital payments to rural districts, where mobile banking is still limited." },
  { id: 2, title: "New open-source AI tools help small teams ship faster", category: "Tech", author: "Rohan Karki", date: "2026-09-30", image: img("aitools"), featured: true,
    summary: "Developers are adopting lightweight AI assistants to automate testing and documentation.",
    content: "Small development teams are turning to open-source AI tools to automate repetitive work such as writing tests and updating documentation.\n\nExperts caution that generated code still needs careful review, but say the productivity gains are real for teams with limited staff." },
  { id: 3, title: "National football team qualifies for the regional finals", category: "Sports", author: "Sujan Thapa", date: "2026-10-01", image: img("football"), featured: true,
    summary: "A late goal sealed a 2–1 win and a place in next month's tournament final.",
    content: "The national football team booked its place in the regional finals after a dramatic 2–1 victory, with the winner arriving in the 88th minute.\n\nThe coach praised the squad's discipline and said preparations for the final begin tomorrow." },
  { id: 4, title: "Doctors urge simple daily habits to cut heart disease risk", category: "Health", author: "Dr. Mina Gurung", date: "2026-09-25", image: img("heart"),
    summary: "Walking, sleep and less salt top the list of recommendations from a new health review.",
    content: "A new review of long-term studies finds that thirty minutes of walking a day, regular sleep and lower salt intake significantly reduce heart disease risk.\n\nHealth workers say these changes are cheap, realistic and work for almost every age group." },
  { id: 5, title: "Global leaders meet to discuss climate finance for mountain regions", category: "World", author: "Priya Sharma", date: "2026-09-29", image: img("climate"),
    summary: "Himalayan nations ask for dedicated funds to handle glacier melt and flooding.",
    content: "Leaders and climate experts gathered this week to discuss how wealthier countries can fund adaptation in mountain regions.\n\nDelegates from Himalayan nations said glacier melt is already affecting farming and water supply downstream." },
  { id: 6, title: "Smartphone makers bet on repairable designs", category: "Tech", author: "Rohan Karki", date: "2026-09-22", image: img("phone"),
    summary: "New models feature swappable batteries and modular screens as repair rules tighten.",
    content: "Several smartphone makers have announced devices with swappable batteries and modular screens as new repair regulations come into force.\n\nAnalysts expect longer product lifetimes and lower electronic waste if the trend continues." },
  { id: 7, title: "Local cricket league introduces women's division", category: "Sports", author: "Sujan Thapa", date: "2026-09-20", image: img("cricket"),
    summary: "Twelve clubs have registered for the league's first women's season.",
    content: "The local cricket association launched a women's division this season, with twelve clubs already registered.\n\nOrganisers hope the league will create a pathway for young players to reach national selection." },
  { id: 8, title: "Tourism rebounds as autumn trekking bookings hit a five-year high", category: "Business", author: "Anita Shrestha", date: "2026-10-02", image: img("trekking"),
    summary: "Operators report full lodges along popular routes and rising international arrivals.",
    content: "Trekking operators report their best autumn season in five years, with lodges along popular routes fully booked.\n\nBusiness owners say the recovery is supporting thousands of seasonal jobs in guiding, transport and hospitality." },
  { id: 9, title: "Hospitals adopt digital records to cut waiting times", category: "Health", author: "Dr. Mina Gurung", date: "2026-09-18", image: img("hospital"),
    summary: "A pilot programme shows patient wait times dropping by nearly a third.",
    content: "A pilot programme using digital patient records has reduced average waiting times by almost a third in three public hospitals.\n\nThe health ministry plans to extend the system to more districts next year." },
  { id: 10, title: "Space agency confirms next lunar sample mission", category: "World", author: "Priya Sharma", date: "2026-09-27", image: img("moon"),
    summary: "The mission aims to bring back rock samples from the lunar south pole.",
    content: "The space agency confirmed a new mission to collect and return rock samples from the lunar south pole.\n\nScientists believe the samples could reveal how water ice formed and where it can be found." },
  { id: 11, title: "Esports tournament draws record online audience", category: "Sports", author: "Sujan Thapa", date: "2026-09-26", image: img("esports"),
    summary: "More than two million viewers tuned in for the weekend's grand final.",
    content: "An international esports tournament set a new viewership record over the weekend, with more than two million people watching the grand final online.\n\nOrganisers say regional qualifiers will expand next year." },
  { id: 12, title: "Web developers embrace utility-first CSS for faster design", category: "Tech", author: "Rohan Karki", date: "2026-09-24", image: img("webdev"),
    summary: "Teams say utility classes speed up prototyping and keep styles consistent.",
    content: "More front-end teams are choosing utility-first CSS frameworks to build consistent interfaces quickly.\n\nCritics point to long class lists, but supporters say component-based design keeps the code tidy." },
];

export const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
