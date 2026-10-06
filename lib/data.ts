export type ProjectStatus = "Completed" | "Ongoing" | "Upcoming";
export type ProjectType = "Residential" | "Commercial" | "Mixed-use" | "Land";

export type Project = {
  slug: string;
  name: string;
  location: string;
  type: ProjectType;
  status: ProjectStatus;
  year: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  featured?: boolean;
  area: string;
  units: string;
  completion: string;
  amenities: string[];
  details: { label: string; value: string }[];
};

const image = (id: string, width = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

export const projects: Project[] = [
  {
    slug: "the-lyra-residences",
    name: "The Lyra Residences",
    location: "Riverside District",
    type: "Residential",
    status: "Ongoing",
    year: "2025",
    eyebrow: "Signature residences",
    description: "A quiet composition of light, stone, and considered living.",
    longDescription:
      "The Lyra is an intimate collection of residences shaped around a central garden. Each home pairs generous proportions with natural materials and long, unbroken views across the river district. This is sample project content intended to be replaced with verified project details.",
    image: image("photo-1600607687920-4e2a09cf159d"),
    gallery: [
      image("photo-1600607687920-4e2a09cf159d"),
      image("photo-1600210492486-724fe5c67fb0"),
      image("photo-1618221195710-dd6b41faaea6"),
      image("photo-1600566753190-17f0baa2a6c3"),
    ],
    featured: true,
    area: "Riverside District",
    units: "48 residences",
    completion: "Q4 2025",
    amenities: ["Residents' garden", "Wellness studio", "Concierge lounge", "Secure parking"],
    details: [
      { label: "Residences", value: "48" },
      { label: "Home types", value: "1–4 bed" },
      { label: "Architecture", value: "Atelier North" },
      { label: "Interiors", value: "Studio Form" },
    ],
  },
  {
    slug: "house-of-courtyards",
    name: "House of Courtyards",
    location: "Old Town",
    type: "Residential",
    status: "Upcoming",
    year: "2026",
    eyebrow: "Private residences",
    description: "A modern interpretation of the city courtyard house.",
    longDescription:
      "House of Courtyards brings a small set of private residences to one of the city's most characterful streets. Layered thresholds, planted courtyards, and a material palette of oak, limestone, and bronze create a home that feels private yet connected.",
    image: image("photo-1600607687939-ce8a6c25118c"),
    gallery: [
      image("photo-1600607687939-ce8a6c25118c"),
      image("photo-1600566753086-00f18fb6b3ea"),
      image("photo-1600585154340-be6161a56a0c"),
    ],
    featured: true,
    area: "Old Town",
    units: "9 private homes",
    completion: "2026",
    amenities: ["Private courtyards", "Roof terraces", "Residents' library", "Bespoke kitchens"],
    details: [
      { label: "Residences", value: "9" },
      { label: "Home types", value: "2–5 bed" },
      { label: "Architecture", value: "Morrow Studio" },
      { label: "Landscape", value: "Field Office" },
    ],
  },
  {
    slug: "meridian-house",
    name: "Meridian House",
    location: "Central Quarter",
    type: "Mixed-use",
    status: "Completed",
    year: "2024",
    eyebrow: "Work / life / city",
    description: "A new civic address for independent work and urban life.",
    longDescription:
      "Meridian House is a mixed-use building designed for the way the city works now: adaptable studios, hospitality-led amenities, and homes above. A new public passage at ground level connects the market street to a tree-lined square.",
    image: image("photo-1486406146926-c627a92ad1ab"),
    gallery: [
      image("photo-1486406146926-c627a92ad1ab"),
      image("photo-1497366811353-6870744d04b2"),
      image("photo-1497366754035-f200968a6e72"),
    ],
    featured: true,
    area: "Central Quarter",
    units: "32 studios + 18 homes",
    completion: "Completed 2024",
    amenities: ["Public courtyard", "Flexible studios", "Rooftop terrace", "Café and lobby"],
    details: [
      { label: "Footprint", value: "4,800 sqm" },
      { label: "Homes", value: "18" },
      { label: "Studios", value: "32" },
      { label: "Completion", value: "2024" },
    ],
  },
  {
    slug: "solace-villas",
    name: "Solace Villas",
    location: "Coastal Edge",
    type: "Residential",
    status: "Completed",
    year: "2023",
    eyebrow: "Coastal living",
    description: "Five private villas opening fully to the landscape.",
    longDescription:
      "Solace Villas is a study in retreat: five individual homes set lightly into a coastal hillside. Deep overhangs, shaded courtyards, and sliding walls create a calm relationship between shelter and open air.",
    image: image("photo-1600607688969-a5bfcd646154"),
    gallery: [
      image("photo-1600607688969-a5bfcd646154"),
      image("photo-1600585154526-990dced4db0d"),
      image("photo-1600566753376-12c8ab7fb75b"),
    ],
    area: "Coastal Edge",
    units: "5 private villas",
    completion: "Completed 2023",
    amenities: ["Infinity pools", "Private gardens", "Ocean terraces", "Guest pavilions"],
    details: [
      { label: "Villas", value: "5" },
      { label: "Plot sizes", value: "600–950 sqm" },
      { label: "Setting", value: "Coastal" },
      { label: "Completion", value: "2023" },
    ],
  },
  {
    slug: "northline-commons",
    name: "Northline Commons",
    location: "North District",
    type: "Commercial",
    status: "Ongoing",
    year: "2025",
    eyebrow: "Commercial destination",
    description: "A flexible workplace campus anchored by a public square.",
    longDescription:
      "Northline Commons is a workplace destination with an unusually generous civic ambition. Its interconnected buildings frame a landscaped square, offering adaptable floorplates, hospitality spaces, and a daily rhythm beyond the working day.",
    image: image("photo-1497366216548-37526070297c"),
    gallery: [
      image("photo-1497366216548-37526070297c"),
      image("photo-1497366754035-f200968a6e72"),
      image("photo-1524758631624-e2822e304c36"),
    ],
    area: "North District",
    units: "14,000 sqm workspace",
    completion: "Q2 2025",
    amenities: ["Landscaped square", "End-of-trip facilities", "Event hall", "Shared meeting suites"],
    details: [
      { label: "Workspace", value: "14,000 sqm" },
      { label: "Buildings", value: "3" },
      { label: "Parking", value: "260 bays" },
      { label: "Completion", value: "Q2 2025" },
    ],
  },
  {
    slug: "garden-terraces",
    name: "Garden Terraces",
    location: "Hillside Village",
    type: "Land",
    status: "Upcoming",
    year: "2027",
    eyebrow: "Land opportunity",
    description: "A low-density masterplan for living closer to nature.",
    longDescription:
      "Garden Terraces is a carefully planned land opportunity set within an established landscape. The emerging vision protects existing trees, introduces walkable lanes, and makes room for a small number of enduring homes.",
    image: image("photo-1511818966892-d7d671e672a2"),
    gallery: [
      image("photo-1511818966892-d7d671e672a2"),
      image("photo-1505693416388-ac5ce068fe85"),
      image("photo-1505693416388-ac5ce068fe85"),
    ],
    area: "Hillside Village",
    units: "12 serviced plots",
    completion: "Planning phase",
    amenities: ["Protected landscape", "Serviced plots", "Walking trails", "Community pavilion"],
    details: [
      { label: "Land area", value: "8.4 hectares" },
      { label: "Plots", value: "12" },
      { label: "Density", value: "Low-rise" },
      { label: "Stage", value: "Planning" },
    ],
  },
];

export const services = [
  {
    number: "01",
    title: "Property Sales & Marketing",
    short: "Positioning, storytelling, and discreet sales strategy for distinctive property.",
    description:
      "We build clear market narratives around each property, pairing thoughtful positioning with considered campaigns, qualified outreach, and a high-touch client journey from first enquiry to completion.",
    icon: "ArrowUpRight",
  },
  {
    number: "02",
    title: "Investment Consultancy",
    short: "Independent thinking for confident property decisions.",
    description:
      "Our advisory work brings together market context, opportunity screening, development analysis, and a long-term lens—so each decision is grounded in the details that matter.",
    icon: "Compass",
  },
  {
    number: "03",
    title: "Residential Development",
    short: "From first sketch to the feeling of arriving home.",
    description:
      "We lead residential projects with a focus on enduring design, build quality, and the small practical choices that make a space feel deeply considered.",
    icon: "Home",
  },
  {
    number: "04",
    title: "Commercial Real Estate",
    short: "Workplaces and destinations with a reason to return.",
    description:
      "We shape flexible commercial environments that support people, businesses, and the wider city—balancing performance with a clear sense of identity.",
    icon: "Building2",
  },
  {
    number: "05",
    title: "Property Management",
    short: "Long-term care for places and the people in them.",
    description:
      "Our management approach protects the value and character of a property through responsive stewardship, transparent reporting, and hands-on attention.",
    icon: "KeyRound",
  },
  {
    number: "06",
    title: "Land Acquisition",
    short: "Seeing the potential in the right piece of ground.",
    description:
      "We assess land opportunities with a disciplined eye for context, planning, access, and future use—creating a clear route from possibility to place.",
    icon: "Map",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Aurelia made a complex decision feel clear. Every conversation was precise, honest, and genuinely attentive to what mattered to us.",
    name: "Sample Client",
    role: "Private buyer · Placeholder testimonial",
  },
  {
    quote:
      "The team understood that a good development is more than a collection of rooms. They held the design, the detail, and the long view together.",
    name: "Sample Partner",
    role: "Development partner · Placeholder testimonial",
  },
  {
    quote:
      "We felt looked after at every stage. The experience was calm, informed, and refreshingly human.",
    name: "Sample Resident",
    role: "Homeowner · Placeholder testimonial",
  },
];

export const insights = [
  {
    slug: "the-new-language-of-luxury",
    category: "Perspective",
    date: "06.03.25",
    title: "The new language of luxury is attention",
    excerpt: "Why the most valuable spaces are being defined less by excess, and more by how thoughtfully they support a life.",
    image: image("photo-1600607687920-4e2a09cf159d", 1200),
  },
  {
    slug: "reading-a-place-before-you-invest",
    category: "Investment",
    date: "19.02.25",
    title: "Reading a place before you invest",
    excerpt: "Five lenses for understanding the potential, friction, and future character of a property opportunity.",
    image: image("photo-1511818966892-d7d671e672a2", 1200),
  },
  {
    slug: "a-case-for-the-courtyard",
    category: "Design notes",
    date: "04.02.25",
    title: "A case for the courtyard",
    excerpt: "The enduring architectural device that makes space feel both open and held.",
    image: image("photo-1600566753086-00f18fb6b3ea", 1200),
  },
];

export const stats = [
  { value: 18, suffix: "+", label: "Projects shaped" },
  { value: 12, suffix: "+", label: "Years of experience" },
  { value: 240, suffix: "+", label: "Client relationships" },
  { value: 6, suffix: "", label: "Cities connected" },
];

export const values = [
  { title: "Considered by design", text: "We look closely, ask better questions, and make decisions that hold up over time." },
  { title: "Clear by default", text: "Trust grows through honest advice, transparent process, and no unnecessary complexity." },
  { title: "Long view", text: "We think beyond the handover to the life, value, and character a place can carry." },
];

export const milestones = [
  { year: "2013", title: "Aurelia begins", text: "A small advisory practice built around a simple belief: property should feel personal." },
  { year: "2017", title: "First development", text: "The first Aurelia-led residential project moves from ambition to completion." },
  { year: "2021", title: "A wider lens", text: "Our work grows across residential, commercial, and land opportunities." },
  { year: "Today", title: "Still looking closer", text: "We continue to build a portfolio of places with presence and purpose." },
];
