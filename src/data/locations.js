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
    image: "assets/images/common/sc-gallery-4.jpg",
    imageAlt: "Children playing together in a bright, welcoming classroom",
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
    image: "assets/images/common/sc-gallery-5.jpg",
    imageAlt: "Educator reading with a small group of children on a rug",
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
    image: "assets/images/thumbnails/studying-classroom.jpg",
    imageAlt: "Children exploring hands-on activities at a classroom table",
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
    image: "assets/images/common/sc-program1.jpg",
    imageAlt: "Children engaged in outdoor play and games",
    description:
      "A playful, energetic centre where fun and learning go hand in hand, right in the heart of New Maryland.",
    detailUrl: "/location#serious-fun",
    directionsUrl: mapsDirectionsUrl(
      "98 New Maryland Highway, New Maryland, NB E3C 1H6"
    ),
    latitude: 45.8921021,
    longitude: -66.6839987,
  },
];

export const sharedContact = {
  phone: SHARED_PHONE,
  phoneTel: SHARED_PHONE_TEL,
  email: SHARED_EMAIL,
};

export default locations;
