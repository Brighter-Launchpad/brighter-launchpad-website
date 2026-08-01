import { LeftArrow, RightArrow } from "../../Icons";

const GALLERY_ITEMS = [
  {
    image: "assets/images/common/sc-gallery-1.jpg",
    alt: "Bright, colourful classroom set up for the day",
    size: "g-wide",
  },
  {
    image: "assets/images/common/sc-gallery-2.jpg",
    alt: "Children working on a creative art activity",
    size: "g-square",
  },
  {
    image: "assets/images/common/sc-gallery-3.jpg",
    alt: "Cozy reading area with books and cushions",
    size: "g-tall",
  },
  {
    image: "assets/images/common/sc-gallery-6.jpg",
    alt: "Children enjoying outdoor play",
    size: "g-small",
  },
  {
    image: "assets/images/common/sc-gallery-7.jpg",
    alt: "Educator supporting a child during an activity",
    size: "g-small",
  },
  {
    image: "assets/images/common/sc-gallery-8.jpg",
    alt: "Group of children learning together",
    size: "g-square",
  },
  {
    image: "assets/images/common/sc-gallery-9.jpg",
    alt: "A quiet, calm corner for rest and reflection",
    size: "g-wide",
  },
  {
    image: "assets/images/common/img-courses-1.jpg",
    alt: "Child leading their own hands-on exploration",
    size: "g-square",
  },
];

const LocationGallery = () => {
  return (
    <section className="tf-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="title-heading st-2">
              <div className="sub-heading clr-pri-3 f-mulish">
                <LeftArrow />
                <span className="inner-sub st-1">Inside Our Centres</span>
                <RightArrow />
              </div>
              <h2 className="title clr-pri-2">
                Spaces Made for Bright Beginnings.
              </h2>
            </div>
          </div>
          <div className="col-12">
            <div className="location-gallery-grid">
              {GALLERY_ITEMS.map((item) => (
                <div
                  className={`location-gallery-item ${item.size}`}
                  key={item.image}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={480}
                    height={360}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationGallery;
