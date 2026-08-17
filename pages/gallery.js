import PageBanner from "../src/components/PageBanner";
import PhotoGallerySlider from "../src/components/PhotoGallerySlider";
import Seo from "../src/components/seo/Seo";
import { LeftArrow, RightArrow } from "../src/Icons";
import { buildBreadcrumbSchema } from "../src/lib/seo";
import Layout from "../src/layouts/Layout";

const PAGE_PATH = "/gallery/";
const PAGE_TITLE = "Photo Gallery | Brighter Launchpad";
const PAGE_DESCRIPTION =
  "See everyday life at Brighter Launchpad centres — classrooms, outdoor play, and the moments that make up our children's days.";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Gallery", path: PAGE_PATH },
]);

const GALLERY_GRID_ITEMS = [
  {
    image: "assets/images/common/gallery-climbing-wall-1.png",
    title: "Climbing Wall",
  },
  {
    image: "assets/images/common/gallery-classroom-bright.png",
    title: "Bright Classroom",
  },
  {
    image: "assets/images/common/gallery-reading-corner.png",
    title: "Reading Corner",
  },
  {
    image: "assets/images/common/gallery-play-kitchen.png",
    title: "Play Kitchen",
  },
  {
    image: "assets/images/common/gallery-nap-nook.png",
    title: "Nap Nook",
  },
  {
    image: "assets/images/common/gallery-classroom-mural.png",
    title: "Classroom Mural",
  },
  {
    image: "assets/images/common/gallery-classroom-fence.png",
    title: "Classroom & Play",
  },
  {
    image: "assets/images/common/gallery-climbing-wall-2.png",
    title: "Climbing Wall",
  },
  {
    image: "assets/images/common/gallery-cubby-hallway.png",
    title: "Cubby Hallway",
  },
  {
    image: "assets/images/common/gallery-classroom-green.png",
    title: "Craft Corner",
  },
  {
    image: "assets/images/common/gallery-sensory-corner.png",
    title: "Sensory Corner",
  },
  {
    image: "assets/images/common/gallery-toddler-sensory-wall.png",
    title: "Toddler Classroom",
  },
  {
    image: "assets/images/common/gallery-classroom-round-tables.png",
    title: "Activity Tables",
  },
  {
    image: "assets/images/common/gallery-office-hallway.png",
    title: "Centre Hallway",
  },
];

const Gallery = () => {
  return (
    <Layout bodyClass={"gallery"}>
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path={PAGE_PATH}
        jsonLd={breadcrumbSchema}
      />
      <PageBanner pageName={"Gallery"} />

      <section className="tf-section tf-galley">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-4">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Photo Gallery</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Explore Our Case Studies &amp; Recent Photo Gallery
                </h2>
              </div>
            </div>
            {GALLERY_GRID_ITEMS.map((item, i) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-12"
                key={item.image}
              >
                <div
                  className="sc-gallery wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <div className={`box-feature${i === 0 ? " active" : ""}`}>
                    <img src={item.image} alt={item.title} />
                    <div className="overlay" />
                    <div className="box-content">
                      <h5 className="title">
                        <a href="#" className=" clr-pri-2">
                          {item.title}
                        </a>
                      </h5>
                      <p className="f-rubik">Brighter Launchpad</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="tf-section tf-gallery">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Photo Gallery</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Explore Our Case Studies &amp; Recent Photo Gallery
                </h2>
              </div>
            </div>
            <div className="col-12">
              <div className="slider-gallery">
                <div className="themesflat-carousel clearfix">
                  <PhotoGallerySlider />
                </div>
                {/*/.themesflat-carousel*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Gallery;
