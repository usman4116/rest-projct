export const siteConfig = {
  name: "Aurelia Developments",
  shortName: "Aurelia",
  tagline: "Places with presence.",
  description:
    "Aurelia Developments creates considered homes, destinations, and investment opportunities with a lasting sense of place.",
  location: "City, Country",
  email: "hello@aurelia.example",
  phone: "+1 (000) 555-0148",
  whatsapp: "10005550148",
  address: "100 Example Avenue, City, Country",
  domain: "https://aurelia.example",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    pinterest: "https://www.pinterest.com/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
