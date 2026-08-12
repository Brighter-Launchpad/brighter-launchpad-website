const SHARED_PHONE = "+1 613-305-2982";
const SHARED_PHONE_TEL = "+16133052982";
const SHARED_EMAIL = "admin@brighterlaunchpad.ca";

const mapsDirectionsUrl = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

export const locations = [
  {
    id: "brighter-horizon",
    number: "01",
    slug: "brighter-horizon",
    name: "Brighter Horizon Preschool & Afterschool Centre",
    navName: "Brighter Launchpad Minto, Pleasant Drive",
    address: "497 Pleasant Drive, Minto, NB E4B 2T4",
    city: "Minto",
    province: "NB",
    postalCode: "E4B 2T4",
    phone: SHARED_PHONE,
    phoneTel: SHARED_PHONE_TEL,
    email: SHARED_EMAIL,
    image: "assets/images/thumbnails/brighter-horizon-location.png",
    imageAlt: "Brighter Horizon Preschool & Afterschool Centre",
    description:
      "A warm preschool and afterschool home base where little learners play, explore, and build friendships every day.",
    detailUrl: "/location#brighter-horizon",
    directionsUrl: mapsDirectionsUrl("497 Pleasant Drive, Minto, NB E4B 2T4"),
    latitude: 46.0716385,
    longitude: -66.0627107,
  },
  {
    id: "beautiful-beginnings",
    number: "02",
    slug: "beautiful-beginnings",
    name: "Beautiful Beginnings Early Learning and Childcare Centre",
    navName: "Brighter Launchpad Chipman",
    address: "10 Civic Court, Chipman, NB E4A 2H9",
    city: "Chipman",
    province: "NB",
    postalCode: "E4A 2H9",
    phone: SHARED_PHONE,
    phoneTel: SHARED_PHONE_TEL,
    email: SHARED_EMAIL,
    image: "assets/images/thumbnails/beautiful-beginnings-location.png",
    imageAlt: "Beautiful Beginnings Early Learning and Childcare Centre",
    description:
      "A caring early learning environment where curiosity is encouraged and every child feels safe to grow.",
    detailUrl: "/location#beautiful-beginnings",
    directionsUrl: mapsDirectionsUrl("10 Civic Court, Chipman, NB E4A 2H9"),
    latitude: 46.1739289,
    longitude: -65.8770076,
  },
  {
    id: "a2z",
    number: "03",
    slug: "a2z",
    name: "A2Z Learning & Care Centre",
    navName: "Brighter Launchpad Minto, Theatre Street",
    address: "7 Theater Street, Minto, NB E4B 3M9",
    city: "Minto",
    province: "NB",
    postalCode: "E4B 3M9",
    phone: SHARED_PHONE,
    phoneTel: SHARED_PHONE_TEL,
    email: SHARED_EMAIL,
    image: "assets/images/thumbnails/a2z-location.png",
    imageAlt: "A2Z Learning & Care Centre",
    description:
      "A joyful, inclusive space from A to Z where children build confidence through play-based learning.",
    detailUrl: "/location#a2z",
    directionsUrl: mapsDirectionsUrl("7 Theater Street, Minto, NB E4B 3M9"),
    latitude: 46.0749916,
    longitude: -66.0739075,
  },
  {
    id: "serious-fun",
    number: "04",
    slug: "serious-fun",
    name: "Serious Fun Childcare",
    navName: "Brighter Launchpad New Maryland",
    address: "98 New Maryland Highway, New Maryland, NB E3C 1H6",
    city: "New Maryland",
    province: "NB",
    postalCode: "E3C 1H6",
    phone: SHARED_PHONE,
    phoneTel: SHARED_PHONE_TEL,
    email: SHARED_EMAIL,
    image: "assets/images/thumbnails/serious-fun-location.png",
    imageAlt: "Serious Fun Childcare",
    description:
      "A playful, energetic centre where fun and learning go hand in hand, right in the heart of New Maryland.",
    detailUrl: "/location#serious-fun",
    directionsUrl: mapsDirectionsUrl(
      "98 New Maryland Highway, New Maryland, NB E3C 1H6"
    ),
    latitude: 45.8921021,
    longitude: -66.6839987,
  },
  {
    id: "tiny-bubbles",
    number: "05",
    slug: "tiny-bubbles",
    name: "Tiny Bubbles Early Learning Center of Excellence Inc.",
    navName: "Brighter Launchpad Fredericton, Hanwell Road",
    address: "1290 Hanwell Road, Fredericton, NB E3C 1A7",
    city: "Fredericton",
    province: "NB",
    postalCode: "E3C 1A7",
    phone: SHARED_PHONE,
    phoneTel: SHARED_PHONE_TEL,
    email: SHARED_EMAIL,
    image: "assets/images/thumbnails/tiny-bubbles-location.png",
    imageAlt: "Tiny Bubbles Early Learning Center of Excellence Inc.",
    description:
      "A nurturing centre of excellence where every child's early learning journey is met with care and expertise.",
    detailUrl: "/location#tiny-bubbles",
    directionsUrl: mapsDirectionsUrl(
      "1290 Hanwell Road, Fredericton, NB E3C 1A7"
    ),
    latitude: 45.9441533,
    longitude: -66.6966586,
  },
  {
    id: "sunny-days",
    number: "06",
    slug: "sunny-days",
    name: "Sunny Days and Nights Children's Center Inc.",
    navName: "Brighter Launchpad Fredericton, Brookside Drive",
    address: "520 Brookside Drive, Fredericton, NB E3A 8V2",
    city: "Fredericton",
    province: "NB",
    postalCode: "E3A 8V2",
    phone: SHARED_PHONE,
    phoneTel: SHARED_PHONE_TEL,
    email: SHARED_EMAIL,
    image: "assets/images/thumbnails/sunny-days-location.png",
    imageAlt: "Sunny Days and Nights Children's Center Inc.",
    description:
      "A bright, welcoming centre where children enjoy sunny days full of play, learning, and new friendships.",
    detailUrl: "/location#sunny-days",
    directionsUrl: mapsDirectionsUrl(
      "520 Brookside Drive, Fredericton, NB E3A 8V2"
    ),
    latitude: 45.9924127,
    longitude: -66.6478885,
  },
];

export const sharedContact = {
  phone: SHARED_PHONE,
  phoneTel: SHARED_PHONE_TEL,
  email: SHARED_EMAIL,
  social: {
    facebook: "https://www.facebook.com/share/1C5su82RHf/",
    instagram: "https://www.instagram.com/brighterlaunchpad.ca",
    linkedin: "https://www.linkedin.com/in/brighter-launchpad-5b362b425",
  },
};

export default locations;
