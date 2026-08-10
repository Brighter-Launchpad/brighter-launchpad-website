import { LeftArrow, RightArrow } from "../../Icons";

const GALLERY_ITEMS = [
  {
    image: "assets/images/common/gallery-climbing-wall-1.png",
    alt: "Colourful indoor climbing wall with a Believe, Climb, Achieve sign",
    size: "g-wide",
  },
  {
    image: "assets/images/common/gallery-classroom-bright.png",
    alt: "Bright, sunlit classroom with tables set up for activities",
    size: "g-square",
  },
  {
    image: "assets/images/common/gallery-reading-corner.png",
    alt: "Cozy reading corner with cushions and a bookshelf",
    size: "g-tall",
  },
  {
    image: "assets/images/common/gallery-play-kitchen.png",
    alt: "Play kitchen and activity corner",
    size: "g-small",
  },
  {
    image: "assets/images/common/gallery-nap-nook.png",
    alt: "Cozy nap and rest area with soft toys",
    size: "g-small",
  },
  {
    image: "assets/images/common/gallery-classroom-mural.png",
    alt: "Classroom with a colourful climbing wall mural and activity tables",
    size: "g-square",
  },
  {
    image: "assets/images/common/gallery-classroom-fence.png",
    alt: "Spacious classroom with a picket fence play divider",
    size: "g-wide",
  },
  {
    image: "assets/images/common/gallery-climbing-wall-2.png",
    alt: "Colourful climbing wall with activity tables nearby",
    size: "g-square",
  },
  {
    image: "assets/images/common/gallery-cubby-hallway.png",
    alt: "Cubby area with a hopscotch floor game",
    size: "g-small",
  },
  {
    image: "assets/images/common/gallery-classroom-green.png",
    alt: "Classroom activity table with a craft display wall",
    size: "g-small",
  },
  {
    image: "assets/images/common/gallery-sensory-corner.png",
    alt: "Colourful feelings and sensory wall with a cozy beanbag corner",
    size: "g-tall",
  },
  {
    image: "assets/images/common/gallery-toddler-sensory-wall.png",
    alt: "Toddler classroom with a sensory wall and storage cubbies",
    size: "g-square",
  },
  {
    image: "assets/images/common/gallery-classroom-round-tables.png",
    alt: "Classroom with round activity tables and toy storage",
    size: "g-wide",
  },
  {
    image: "assets/images/common/gallery-office-hallway.png",
    alt: "Centre hallway leading to classrooms",
    size: "g-small",
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
