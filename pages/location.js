import BrandValues from "../src/components/location/BrandValues";
import FinalCTA from "../src/components/location/FinalCTA";
import LocationGallery from "../src/components/location/LocationGallery";
import LocationHero from "../src/components/location/LocationHero";
import LocationIntro from "../src/components/location/LocationIntro";
import LocationMap from "../src/components/location/LocationMap";
import LocationRow from "../src/components/location/LocationRow";
import MobileActionBar from "../src/components/location/MobileActionBar";
import Seo from "../src/components/seo/Seo";
import { locations } from "../src/data/locations";
import { absoluteUrl, buildBreadcrumbSchema, organizationSchema } from "../src/lib/seo";
import Layout from "../src/layouts/Layout";
import Header1 from "../src/layouts/header/Header1";

const PAGE_PATH = "/location/";
const PAGE_TITLE = "Our Locations | Brighter Launchpad Childcare Centres";
const PAGE_DESCRIPTION =
  "Explore Brighter Launchpad childcare centres in Minto, Chipman, and New Maryland, New Brunswick. View branch details, get directions, or begin enrolment.";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Our Locations", path: PAGE_PATH },
]);

const childCareSchema = locations.map((location) => ({
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: location.name,
  url: absoluteUrl(location.detailUrl),
  telephone: location.phoneTel,
  email: location.email,
  image: absoluteUrl(location.image),
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
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path={PAGE_PATH}
        image={absoluteUrl("assets/images/common/location-hero-classroom.jpg")}
        jsonLd={[breadcrumbSchema, organizationSchema, ...childCareSchema]}
      />

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
