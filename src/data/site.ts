/** Build an optimized Pexels image URL. */
export const px = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const CONTACT = {
  name: "Rodney C. Peete",
  brand: "Dreams R Real",
  phone: "(562) 746-4902",
  phoneHref: "tel:+15627464902",
  email: "rpeete02@gmail.com",
  addressLine1: "8141 E 2nd St, Suite 502",
  addressLine2: "Downey, CA 90241",
  dre: "01707242",
  facebook: "https://www.facebook.com/rufocus62/",
  mapEmbed:
    "https://www.google.com/maps?q=8141+E+2nd+St+Suite+502,+Downey,+CA+90241&output=embed",
};

export const TAGLINE =
  "I am your Realtor 4 life, there is nothing I wouldn’t do to make sure all your dreams come true.";

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "areas", label: "Areas" },
  { id: "listings", label: "Listings" },
  { id: "community", label: "Community" },
  { id: "contact", label: "Contact" },
] as const;

export const HERO_SLIDES = [
  { id: 27626185, caption: "Hillside Villa · Infinity Pool" },
  { id: 36676879, caption: "Modern Estate · Sunset Terrace" },
  { id: 31817160, caption: "Ocean-View Retreat · Golden Hour" },
];

export const WELCOME_TEXT =
  "There's much to see here at Dreams R Real. So, take your time, look around our home-buying services, and explore our property listings to learn all there is to know about us and our offerings. We hope you enjoy our site and feel free to drop us a line if you have any questions about working with our real estate agent, Rodney C Peete.";

export const STATS = [
  { value: "25+", label: "Years of Experience" },
  { value: "4", label: "Southern California Counties" },
  { value: "3-in-1", label: "Real Estate · Mortgage · Notary" },
  { value: "501(c)(3)", label: "Community Nonprofit Founder" },
];

export const BIO = [
  "I have been a real estate agent for over 25 years, specializing in home buying services, mortgage loans, and leveraging my Notary skills to assist my peers with Notary services.",
  "I have actively engaged with today's youth through my company, Smart Choices 501c3, promoting the initiative Dreams R Real. Additionally, I have volunteered with reading programs for children, encouraging the youth to expand past normal expectations.",
  "After earning my associate degree in Mathematics from Southwest College, I furthered my education by earning a Bachelor of Applied Science (B.A.Sc.) Business Administration with a concentration in Human Resource Management.",
];

export const EDUCATION = [
  { degree: "Associate Degree, Mathematics", school: "Southwest College" },
  {
    degree: "Bachelor of Applied Science (B.A.Sc.)",
    school: "Business Administration · Concentration in Human Resource Management",
  },
];

export const ROLES = ["Real Estate Agent", "Mortgage Loans", "Notary Public", "Nonprofit Founder"];

export const SERVICES = [
  {
    number: "01",
    title: "Real Estate Done Right",
    image: px(10099160, 1100),
    alt: "Luxury kitchen with white cabinetry, pendant lights and a granite island",
    body: "Growing up in Carson, California, this area has become my center of gravity for zip code farming. We cover Los Angeles County, Orange County, Riverside County to San Diego County. Sharing market updates with cities like Inglewood, CA, near SoFi Stadium, Intuit Dome and the Los Angeles Sparks’ arena currently under construction in El Segundo CA.",
  },
  {
    number: "02",
    title: "Commercial, Residential, and Rentals",
    image: px(36298689, 1100),
    alt: "Modern luxury residential tower with glass balconies at dusk",
    body: "Large or small, condo or mansion, our home buying services can help you find the perfect property at the right price. Whether you're interested in TICs, fixer-uppers, or luxury homes, our experienced real estate agent, Rodney Peete, is here to assist you. We always maintain an updated list of property listings for you to explore.",
  },
  {
    number: "03",
    title: "Rely on Expertise",
    image: px(6580239, 1100),
    alt: "Elegant living room with floor-to-ceiling windows overlooking a lake",
    body: "If you have questions about affordability, credit, legal matters, or income related to your aspirations with Dreams R Real, trust our home buying services to find what you need quickly. With our expert real estate agent, Rodney Peete, we ensure you feel confident and educated every step of the way, guiding you through our extensive property listings.",
  },
];

export const SUPPORT_SERVICES = [
  {
    key: "buying",
    title: "Home Buying",
    body: "From first showing to final walkthrough, we help you find the perfect property at the right price.",
  },
  {
    key: "mortgage",
    title: "Mortgage Loans",
    body: "Clear answers on affordability, credit and income so you know your true buying power.",
  },
  {
    key: "notary",
    title: "Notary Services",
    body: "Trusted Notary skills that keep your signings smooth, accurate and on schedule.",
  },
  {
    key: "market",
    title: "Market Updates",
    body: "Local insight from Carson to Inglewood, El Segundo and across Southern California.",
  },
] as const;

export const COUNTIES = [
  { name: "Los Angeles County", note: "Carson · Inglewood · El Segundo · Downey" },
  { name: "Orange County", note: "Coastal living and master-planned communities" },
  { name: "Riverside County", note: "Room to grow with exceptional value" },
  { name: "San Diego County", note: "Ocean breezes and coastal luxury" },
];

export const SPOTLIGHTS = [
  {
    label: "Home Base",
    city: "Carson, CA",
    body: "Where Rodney grew up — and his center of gravity for zip code farming.",
  },
  {
    label: "Market Spotlight",
    city: "Inglewood, CA",
    body: "Sharing market updates near SoFi Stadium and the Intuit Dome.",
  },
  {
    label: "On the Horizon",
    city: "El Segundo, CA",
    body: "Home of the Los Angeles Sparks’ arena, currently under construction.",
  },
];

export const CATEGORIES = [
  "All",
  "Luxury Homes",
  "Residential",
  "Condos & High-Rise",
  "Rentals",
  "Commercial",
] as const;

export type Category = Exclude<(typeof CATEGORIES)[number], "All">;

export type Listing = {
  id: number;
  title: string;
  category: Category;
  area: string;
  blurb: string;
  features: string[];
};

export const LISTINGS: Listing[] = [
  {
    id: 8143671,
    title: "Classic Estate with Resort-Style Pool",
    category: "Luxury Homes",
    area: "Los Angeles County",
    blurb: "Timeless architecture, manicured grounds and a resort-style pool made for entertaining.",
    features: ["Resort-style pool", "Manicured grounds", "Entertainer’s patio"],
  },
  {
    id: 12715491,
    title: "Contemporary Ocean-View Villa",
    category: "Luxury Homes",
    area: "San Diego County",
    blurb: "Clean lines, an infinity-edge pool and uninterrupted views toward the Pacific.",
    features: ["Infinity-edge pool", "Ocean views", "Indoor–outdoor living"],
  },
  {
    id: 36710315,
    title: "Glass-Walled Modern Residence",
    category: "Residential",
    area: "Orange County",
    blurb: "Walls of glass open the living room to a sparkling poolside lounge.",
    features: ["Floor-to-ceiling glass", "Poolside lounge", "Open floor plan"],
  },
  {
    id: 31737859,
    title: "Architectural Modern Retreat",
    category: "Residential",
    area: "Riverside County",
    blurb: "A warmly lit modern home with a landscaped garden and private entry.",
    features: ["Designer lighting", "Landscaped garden", "Private entry"],
  },
  {
    id: 32241750,
    title: "Sky-High Modern Residences",
    category: "Condos & High-Rise",
    area: "Los Angeles County",
    blurb: "Elevated condominium living with private balconies and sweeping city light.",
    features: ["Private balconies", "City views", "Lock-and-leave lifestyle"],
  },
  {
    id: 31817162,
    title: "Seaside Penthouse Living",
    category: "Condos & High-Rise",
    area: "Orange County",
    blurb: "Polished marble, soft neutrals and panoramic water views from every seat.",
    features: ["Panoramic views", "Marble floors", "Floor-to-ceiling glass"],
  },
  {
    id: 14598479,
    title: "Designer Luxury Rental",
    category: "Rentals",
    area: "Los Angeles County",
    blurb: "Gallery-worthy interiors with a sculptural staircase and marble dining.",
    features: ["Marble dining", "Gold accents", "Sculptural staircase"],
  },
  {
    id: 8143675,
    title: "Garden Estate & Pool Pavilion",
    category: "Luxury Homes",
    area: "Riverside County",
    blurb: "Expansive lawns, mature trees and a pool pavilion on an estate-sized lot.",
    features: ["Estate-sized lot", "Pool pavilion", "Mature landscaping"],
  },
  {
    id: 2820883,
    title: "Commercial & Mixed-Use Opportunities",
    category: "Commercial",
    area: "Los Angeles County",
    blurb: "Urban-core opportunities for investors and businesses ready to grow.",
    features: ["Urban core", "Investment potential", "High visibility"],
  },
];

export const GALLERY = [
  { id: 39955909, caption: "Primary Suite" },
  { id: 8146153, caption: "Marble Spa Bath" },
  { id: 6587894, caption: "Modern Dining" },
  { id: 8092433, caption: "Formal Dining Room" },
  { id: 7546291, caption: "Guest Retreat" },
];

export const PROCESS = [
  {
    title: "Consultation",
    body: "We talk through your dreams, timeline and budget — and answer your questions about affordability, credit and income.",
  },
  {
    title: "Financing",
    body: "Mortgage loan guidance helps you understand your buying power before you fall in love with a home.",
  },
  {
    title: "Find Your Property",
    body: "Explore our updated property listings — condo or mansion, TIC, fixer-upper or luxury home.",
  },
  {
    title: "Close with Confidence",
    body: "From negotiation to Notary signatures, every detail is handled with care, so you stay educated every step of the way.",
  },
];

export const COMMUNITY = [
  {
    key: "smart",
    title: "Smart Choices 501(c)(3)",
    body: "Rodney’s company actively engages with today’s youth, inspiring better choices and bigger goals.",
  },
  {
    key: "dreams",
    title: "Dreams R Real Initiative",
    body: "A message for the next generation: your dreams are real, and they are within reach.",
  },
  {
    key: "reading",
    title: "Children’s Reading Programs",
    body: "Volunteering with reading programs that encourage young people to expand past normal expectations.",
  },
] as const;

export const INTERESTS = [
  "Buying a Home",
  "Selling a Home",
  "Luxury Homes",
  "Mortgage Loans",
  "Notary Services",
  "Rentals",
  "Commercial Property",
  "Other",
];

export const AREAS = [
  "Any Area",
  "Los Angeles County",
  "Orange County",
  "Riverside County",
  "San Diego County",
  "Carson",
  "Inglewood",
  "El Segundo",
];

export const PROPERTY_TYPES = [
  "Any Type",
  "Luxury Home",
  "Single-Family Home",
  "Condo / High-Rise",
  "TIC",
  "Fixer-Upper",
  "Rental",
  "Commercial",
];

export const BUDGETS = ["Any Budget", "Under $500K", "$500K – $1M", "$1M – $2M", "$2M – $5M", "$5M+"];
