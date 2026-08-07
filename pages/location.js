import Head from "next/head";
import BrandValues from "../src/components/location/BrandValues";
import FinalCTA from "../src/components/location/FinalCTA";
import LocationGallery from "../src/components/location/LocationGallery";
import LocationHero from "../src/components/location/LocationHero";
import LocationIntro from "../src/components/location/LocationIntro";
import LocationMap from "../src/components/location/LocationMap";
import LocationRow from "../src/components/location/LocationRow";
import MobileActionBar from "../src/components/location/MobileActionBar";
import { locations, sharedContact } from "../src/data/locations";
import Layout from "../src/layouts/Layout";
import Header1 from "../src/layouts/header/Header1";

const SITE_URL = "https://www.brighterlaunchpad.ca";
const PAGE_URL = `${SITE_URL}/location/`;
const PAGE_TITLE = "Our Locations | Brighter Launchpad Childcare Centres";
const PAGE_DESCRIPTION =
  "Explore Brighter Launchpad childcare centres in Minto, Chipman, and New Maryland, New Brunswick. View branch details, get directions, or begin enrolment.";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Our Locations",
      item: PAGE_URL,
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brighter Launchpad",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/assets/images/logo/logodark.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: sharedContact.phoneTel,
      email: sharedContact.email,
      contactType: "customer service",
    },
  ],
};

const childCareSchema = locations.map((location) => ({
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: location.name,
  url: `${SITE_URL}${location.detailUrl}`,
  telephone: location.phoneTel,
  email: location.email,
  image: `${SITE_URL}/${location.image}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: location.address.split(",")[0],
    addressLocality: location.city,
    addressRegion: location.province,
    postalCode: location.postalCode,
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: location.latitude,
    longitude: location.longitude,
  },
}));

const LocationPage = () => {
  return (
    <Layout bodyClass="location-page" noHeader>
      <Header1 />
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta
          property="og:image"
          content={`${SITE_URL}/assets/images/common/location-hero-classroom.jpg`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(childCareSchema) }}
        />
      </Head>

      <LocationHero />
      <LocationIntro />

      <section className="tf-section" id="locations-list">
        <div className="container">
          {locations.map((location, index) => (
            <LocationRow
              key={location.id}
              location={location}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <LocationMap />
      <BrandValues />
      <LocationGallery />
      <FinalCTA />
      <MobileActionBar />
    </Layout>
  );
};

export default LocationPage;
