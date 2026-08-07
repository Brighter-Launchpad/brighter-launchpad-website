import Link from "next/link";

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={40}
    height={40}
    viewBox="0 0 40 40"
  >
    <image
      width={40}
      height={40}
      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFR0lEQVRYhcWYe4hWVRTFf84446Q26mRK7+wxpdNUUlpREkEQVNQfRZLVH1oRPYgkkiixtEzKHpNlTJJjD3sMQokRIRGVNhk9FIJKx9FSUzOmaNTmod+4Y4/rjrf7+r6ZT2zB5d57zt7nrnvOOvvsczCz/+s6w8wazKzZzK5N41DCkcck4BtgIzAVOBMYm8biSBK8EvgBWAWcDtwFDAH2A0fFrI8gwQuBJuATYCRwG3AMsAhoB8oAi3kJA2Mlhw9OYgEwRUT8/m6k9UG694tgOXAqcBZQDZwCjAaqgAqgG9gJrAU+B74N+d4PvKjn6UBdrPVkonGEZkypmU02s4/NbI8lo9PMdpnZVjPbbmb7IlavmtloM3vSzBrNrDJpZoauCvlNM7MRZrbUzG5WeY9d2PgGGTu5FWY2y8xuNLNaMxuW0HhwDTezq0XO0ZRgE1yDzOxRM1uu9xL5TDGzUaEfnppEcLoqkxou9FplZn8m2I4xs/pQT69T+QC9zw7Z/uc9PIu7dD86poPC4ZreHbJ2/b4HbFZYaVCIGR/RXi7yhX3BgxP8UQ4b8wo2PwaEZqQH5PXAZGCmJt3tIhtF4BN827mMA34u0cPxwJ6YWzIGJJbG8Rtwq+LcXAXkUuBhYEW0pyJwLicAZwdD3KGGwhgOPAB84H8C7NWfHtDdJbFeISUJvwBva/hOBl7X8zzgRNmnxb8yccqMg7XACzL8CVipuLdbw+V/6GvocTHPQ6gBZgE3qaRBBFv0nldOWQS/Air7MPRRXAasVtls4AkF9z4hay3uTiFXVqAOt2vdddvH1Z77PgS8L5s0DfYii+Aw4D5gObBNHzA1GuhwWx4NLtWzy+EN+T4DnKbyNA32ImuIXYMvaTJ8r2zkD/Wqa+dY4AKtz2kYK81dr/pXlEBs0HtRGvwaGAH8HaspDJcCX8pyjkJN3iGNImuIcwnkyjRxKmLWcexUxuwafEzkPEF9EGiUddEa9OVpmfQU6K9NocfftwD3xjwPYrNiH9LgYsXSZ0MpflEaPBeo1+TwnO8zTYo2pei++lysexo8j3weuEb1C3Rt0ntRGlyjrPivWE1hmKT9B1qLnwM6+9pI1hDnEsiVSkflMes4dgB3SINzRc59H1GGQ7Ea9Bl8p/YRLRrqnHTUJf34UN0T8zyITdKdY4w2SXtFtkblRWtwkRpZJ6JbFAeDtfgi4KSY5yFUKzAHcXAh8LS0TLEabFIwbo3VFIbLtZlyzABeDjKUEAJNRjOpggjmUshVqC6aBUfhvTQNeDMjSQiynFSppVZoe+lbxneUGe/TcHco+fTn5gwNehxckkDOt6/zVd6okVoW8xayerBWMSynbYFnIFuVD5ZJexO1dy4E5yvtuk62H2qdXpPlm0VwtcJCe6wmG9FRGa/JcYneZ2oj/09mKwUQPNAPcuWhHNJ3dK8pce1QTFwc88iDLA32B60iWS/dTgDuBgb3hxx5erA/yCn2VSu0zC+2wTDBoDejoWWIktKRynCGqpd8FvtS+GtoE7RQs/KpUJvnKaEYKp9OycB9dwG/h74VHB708goeuqU5xy3KlK/QkpQaRCNYqdRrpZYz19yomFUyfP/yBfBpaEvbw6fnbETLmv9Zc8jde+U7nYq26G/btJ7uVxJQpaOMq3T+Nzjk75nMR0rVdsgPBfpK+fr++BwtmRNDHTZB4WxDcFjzlg5rxoWPvvpxrTWz1iIPoGp0r3NiA3V6UCeBL1EArlJvFDqJghUm0Jqfx3gvFRolfDh9BF2Xrk/frPmOcl7AekbKgWVf0WVm7YeprTlmxr+2LDj7Hwc5XwAAAABJRU5ErkJggg=="
    />
  </svg>
);

const ProgramDetail = ({ program, otherPrograms }) => {
  return (
    <section className="tf-section tf-classe-detail tf-program-detail">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12 col-12">
            <article className="article tf-details">
              <h2 className="heading">{program.name}</h2>
              <p className="f-mulish m-b30">{program.tagline}</p>
              <div
                className="image m-b30 wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <img src={program.heroImage} alt={program.name} />
              </div>
              {program.sections.map((section, i) => (
                <div className="wrap m-t30" key={section.heading}>
                  <h3 className="title">{section.heading}</h3>
                  {section.paragraphs &&
                    section.paragraphs.map((p, pi) => (
                      <p className="f-mulish" key={pi}>
                        {p}
                      </p>
                    ))}
                  {section.scheduleItems && (
                    <ul className="list">
                      {section.scheduleItems.map((item) => (
                        <li key={item.label}>
                          <span>
                            <strong>{item.label} — </strong>
                            {item.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {i === 1 && program.sectionImage && (
                    <div className="image m-t30 m-b30">
                      <img src={program.sectionImage} alt={program.name} />
                    </div>
                  )}
                </div>
              ))}
              <div className="wrap m-t30">
                <h3 className="title">What The Program Includes</h3>
                <ul className="list">
                  {program.includes.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                <h4 className="title-widget bg-style1">
                  <InfoIcon />
                  Program Information
                </h4>
                <div className="inner-infor">
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-calendar-alt" />
                        Ages
                      </span>
                      <span className="style">{program.quickFacts.ages}</span>
                    </li>
                    <li>
                      <span>
                        <i className="fal fa-clock" />
                        Schedule
                      </span>
                      <span className="style">
                        {program.quickFacts.schedule}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fal fa-map-marker-alt" />
                        Setting
                      </span>
                      <span className="style">
                        {program.quickFacts.setting}
                      </span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <a className="fl-btn st-1">
                      <span className="inner">Enquire Now</span>
                    </a>
                  </Link>
                </div>
              </div>
              {otherPrograms && otherPrograms.length > 0 && (
                <div className="widget new-couses">
                  <h4 className="title-widget bg-style2">
                    <InfoIcon />
                    Other Programs
                  </h4>
                  <ul className="inner-infor">
                    {otherPrograms.map((other) => (
                      <li className="fx" key={other.slug}>
                        <img
                          src={other.cardImage}
                          alt={other.name}
                          className="feature"
                        />
                        <ul className="box-content">
                          <li className="couses">{other.ageRange}</li>
                          <li>
                            <h5>
                              <Link href={`/${other.slug}`}>
                                <a>{other.name}</a>
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
export default ProgramDetail;
