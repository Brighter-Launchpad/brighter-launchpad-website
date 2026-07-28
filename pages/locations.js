import PageBanner from "../src/components/PageBanner";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";

const locations = [
  {
    name: "New York",
    address: "55 Main Street, New York",
    phone: "+012 (345) 678",
    image: "assets/images/thumbnails/widget1.jpg",
  },
  {
    name: "Brooklyn",
    address: "128 Willow Ave, Brooklyn, NY",
    phone: "+012 (345) 679",
    image: "assets/images/thumbnails/widget2.jpg",
  },
  {
    name: "Queens",
    address: "84 Sunrise Blvd, Queens, NY",
    phone: "+012 (345) 680",
    image: "assets/images/thumbnails/widget3.jpg",
  },
];

const Locations = () => {
  return (
    <Layout bodyClass={"locations"}>
      <PageBanner pageName={"Locations"} pageTitle={"Our Locations"} />
      <section className="tf-section tf-faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-2">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Find A Center</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Brighter Launchpad Locations Near You
                </h2>
              </div>
            </div>
            {locations.map((location) => (
              <div className="col-md-4" key={location.name}>
                <div className="sc-faq wow fadeIn animated">
                  <div className="image">
                    <img src={location.image} alt={location.name} />
                  </div>
                  <div className="content">
                    <h4>{location.name}</h4>
                    <p className="desc">{location.address}</p>
                    <p className="desc">{location.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Locations;
