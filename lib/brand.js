export const BRAND = {
  name: "Happy Paradise Tour & Travels",
  tagline: "See Paradise With Us",
  contactPerson: "Shabir Bhat",
  designation: "Head - Sales & Marketing",
  phones: ["+91-9419705151", "+91-7006029730", "+91-1944553948"],
  primaryPhone: "+91-9419705151",
  whatsappNumber: "919419705151",
  email: "info@happyparadisetravels.com",
  website: "www.happyparadisetravels.com",
  address: {
    line1: "Main Road Nishat, Near HDFC Bank",
    line2: "Srinagar, Kashmir - 191121",
    line3: "Jammu & Kashmir, India",
  },
  members: "J&K Tourism, TAAK",
  gstin: "01APCPB8856Q1ZM",
};

export const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export const whatsappHref = (message) =>
  `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Happy Paradise Tour & Travels, I am interested in the Kashmir Couple Package – 04 Nights / 05 Days at ₹22,000 per couple. Please share more details.";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Package", href: "#packages" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Destinations", href: "#destinations" },
  { label: "Stay", href: "#stay" },
  { label: "FAQ", href: "#faq" },
];

export const MOBILE_NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Package Overview", href: "#packages" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Destinations", href: "#destinations" },
  { label: "Accommodation", href: "#stay" },
  { label: "Inclusions", href: "#highlights" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const PACKAGES = [
  {
    image: "/srinagar-shikara-vibrant.jpg",
    badge: "Most Popular",
    badgeTone: "accent",
    duration: "04 Nights / 05 Days",
    name: "Kashmir Couple Package",
    places: "Srinagar · Gulmarg · Pahalgam",
    features: [
      "Houseboat stay on Dal Lake",
      "Complimentary Shikara ride",
      "Private cab for all sightseeing",
      "Daily breakfast & dinner (MAP)",
    ],
    price: "22,000",
    unit: "per couple + 5% GST",
  },
  {
    image: "/sonmarg-village.webp",
    badge: "Best Seller",
    badgeTone: "green",
    duration: "05 Nights / 06 Days",
    name: "Kashmir Family Getaway",
    places: "Srinagar · Gulmarg · Pahalgam · Sonmarg",
    features: [
      "Comfortable hotel stays",
      "Sonmarg day excursion",
      "Private cab for all transfers",
      "Daily breakfast & dinner (MAP)",
    ],
    price: "On Request",
    unit: "customised for your group",
  },
  {
    image: "/srinagar-tulip-garden.jpg",
    badge: "Premium Choice",
    badgeTone: "blue",
    duration: "05 Nights / 06 Days",
    name: "Kashmir Honeymoon Special",
    places: "Srinagar · Gulmarg · Pahalgam",
    features: [
      "Deluxe houseboat, candle-light dinner",
      "Premium hotel category",
      "Private cab for all sightseeing",
      "Complimentary Kahwa welcome",
    ],
    price: "On Request",
    unit: "customised for your trip",
  },
];

export const DESTINATIONS = [
  {
    name: "Srinagar",
    tag: "The Heart of Kashmir",
    text: "Houseboats, Dal Lake and the Mughal Gardens.",
    day: "Day 1",
    image: "/dal-lake-houseboats.jpg",
  },
  {
    name: "Gulmarg",
    tag: "Meadows & Mountains",
    text: "Alpine meadows framed by snow-capped peaks.",
    day: "Day 2",
    image: "/gulmarg-mountain-road.jpg",
  },
  {
    name: "Sonmarg",
    tag: "The Meadow of Gold",
    text: "Glacial valleys along the Sindh river.",
    day: "Day 3",
    image: "/sonmarg-meadow.jpg",
  },
  {
    name: "Pahalgam",
    tag: "Valley of Shepherds",
    text: "Pine forests, Betaab Valley and Lidder river.",
    day: "Day 4",
    image: "/pahalgam-aru-valley.jpg",
  },
];

export const ITINERARY = [
  {
    day: "Day 01",
    title: "Srinagar Arrival",
    place: "Srinagar",
    text: "Arrive at Srinagar airport, transfer to your houseboat on Dal Lake. Evening Shikara ride and welcome Kahwa.",
    image: "/srinagar-dal-lake-sunset.jpg",
  },
  {
    day: "Day 02",
    title: "Gulmarg Excursion",
    place: "Gulmarg",
    text: "Drive to Gulmarg, the 'Meadow of Flowers'. Scenic views and optional Gondola cable car ride.",
    image: "/gulmarg-wooden-lodges.jpg",
  },
  {
    day: "Day 03",
    title: "Sonmarg Excursion",
    place: "Sonmarg",
    text: "Full day excursion to Sonmarg, gateway to the glaciers along the Sindh river valley.",
    image: "/sonmarg-village-river.jpg",
  },
  {
    day: "Day 04",
    title: "Pahalgam Excursion",
    place: "Pahalgam",
    text: "Visit Betaab Valley, Aru Valley and Chandanwari, then Srinagar local sightseeing at Mughal Gardens.",
    image: "/pahalgam-lidder-valley.jpg",
  },
  {
    day: "Day 05",
    title: "Departure",
    place: "Srinagar",
    text: "Check out from the houseboat and transfer to Srinagar airport, carrying beautiful memories of paradise.",
    image: "/dal-lake-misty.jpg",
  },
];

export const FAQS = [
  {
    q: "What is included in the Kashmir Couple Package?",
    a: "Houseboat stay on Dal Lake, private cab for sightseeing, daily breakfast & dinner, and a complimentary Shikara ride.",
  },
  {
    q: "Is the price per couple or per person?",
    a: "The ₹22,000 rate is per couple for the full 04 Nights / 05 Days itinerary, plus 5% GST.",
  },
  {
    q: "Can the itinerary be customised?",
    a: "Yes, every itinerary can be tailored to your travel dates, group size and preferred destinations.",
  },
  {
    q: "Is transportation private or shared?",
    a: "All sightseeing and transfers use a private vehicle exclusively for your group.",
  },
  {
    q: "How do I confirm my booking?",
    a: "Share your travel details via the enquiry form or WhatsApp, and our team will confirm your trip with a simple advance payment.",
  },
  {
    q: "Are meals other than breakfast & dinner included?",
    a: "The package follows a MAP meal plan (breakfast + dinner). Lunch can be arranged at an additional cost on request.",
  },
];

export const REVIEWS = [
  {
    name: "Aditi & Rohan",
    city: "Mumbai",
    text: "Every detail of our Kashmir trip was planned beautifully. The houseboat stay and Gulmarg views were unforgettable.",
  },
  {
    name: "Farhan Ali",
    city: "Bengaluru",
    text: "Shabir bhai and the team were extremely responsive. Private cab and hotel stays were exactly as promised.",
  },
  {
    name: "Meera Nair",
    city: "Delhi",
    text: "A smooth, well-organised trip from airport pickup to drop. Highly recommend Happy Paradise for Kashmir.",
  },
  {
    name: "Karan Singh",
    city: "Chandigarh",
    text: "Loved the Shikara ride and Pahalgam excursion. Great value for a memorable couple getaway.",
  },
];

export const GALLERY = [
  { src: "/dal-lake-shikara.jpg", alt: "Shikara ride on Dal Lake, Srinagar" },
  { src: "/pahalgam-hotel-alpine.jpg", alt: "Snow-covered hotel in Pahalgam" },
  { src: "/misty-kashmir-village.jpg", alt: "Misty Kashmir village in the hills" },
  { src: "/kashmir-trekking.avif", alt: "Trekking in the snow-capped Kashmir mountains" },
  { src: "/srinagar-tulip-garden.jpg", alt: "Tulip Garden, Srinagar" },
  { src: "/gulmarg-mountain-road.jpg", alt: "Mountain road towards Gulmarg" },
];

export const BOOKING_STEPS = [
  { step: "01", title: "Choose Your Package", text: "Pick the Kashmir package that fits your travel dates and group size." },
  { step: "02", title: "Send Your Details", text: "Share your travel date and traveller count via WhatsApp or our enquiry form." },
  { step: "03", title: "Confirm Your Trip", text: "Our team confirms your itinerary, stays and private transport." },
  { step: "04", title: "Start Your Journey", text: "Arrive in Srinagar and let us take care of the rest." },
];
