import Link from "next/link";

const BlogDetail = ({ post, otherPosts }) => {
  return (
    <section className="tf-section tf-blog-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12 col-12">
            <article className="article tf-details">
              <div
                className="feature-article wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <img src={post.image} alt={post.title} />
              </div>
              <div className="meta-post st-2">
                <ul className="fx">
                  <li className="fx">
                    <i className="far fa-calendar-alt clr-pri-3" />
                    {post.date}
                  </li>
                </ul>
              </div>
              <h3 className="title-article clr-pri-2">{post.title}</h3>
              {post.sections.map((section, i) => (
                <div className="wrap m-t30" key={i}>
                  {section.heading && (
                    <h3 className="title">{section.heading}</h3>
                  )}
                  {section.paragraphs &&
                    section.paragraphs.map((p, pi) => (
                      <p className="wrap st-1 f-rubik" key={pi}>
                        {p}
                      </p>
                    ))}
                  {section.items && (
                    <ul className="list">
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <span>
                            <strong>{item.label} — </strong>
                            {item.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.bullets && (
                    <ul className="list">
                      {section.bullets.map((b) => (
                        <li key={b}>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </article>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-12">
            <div
              id="sidebar"
              className="classe-details p-t17 wow fadeInRight animated"
              data-wow-delay="0.3ms"
              data-wow-duration="1000ms"
            >
              <div className="widget widget-infor-details">
                <h4 className="title-widget bg-style1">Get In Touch</h4>
                <div className="inner-infor">
                  <p className="f-mulish clr-pri-4 m-b20">
                    Have a question about our programs, or want to book a
                    tour? We&rsquo;d love to hear from you.
                  </p>
                  <Link href="/contact">
                    <a className="fl-btn st-1">
                      <span className="inner">Contact Us</span>
                    </a>
                  </Link>
                </div>
              </div>
              {otherPosts && otherPosts.length > 0 && (
                <div className="widget new-couses">
                  <h4 className="title-widget bg-style2">
                    More From The Blog
                  </h4>
                  <ul className="inner-infor">
                    {otherPosts.map((other) => (
                      <li className="fx" key={other.slug}>
                        <img
                          src={other.image}
                          alt={other.title}
                          className="feature"
                        />
                        <ul className="box-content">
                          <li className="couses">{other.date}</li>
                          <li>
                            <h5>
                              <Link href={`/${other.slug}`}>
                                <a>{other.title}</a>
                              </Link>
                            </h5>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogDetail;
