import Link from "next/link";
import { Fragment } from "react";
import { locations } from "../../data/locations";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Home 01</Link>
    </li>
    <li>
      <Link href="/home2">Home 02</Link>
    </li>
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link href="/calendar">Academic Calendar</Link>
    </li>
    <li>
      <Link href="/testimonials">testimonials</Link>
    </li>
    <li>
      <Link href="/time-table">Time Table</Link>
    </li>
    <li>
      <Link href="/gallery">gallery</Link>
    </li>
    <li>
      <Link href="/pricing">pricing</Link>
    </li>
    <li>
      <Link href="/faq">Faq</Link>
    </li>
  </Fragment>
);
export const Teacher = () => (
  <Fragment>
    <li>
      <Link href="/teacher">Teacher</Link>
    </li>
    <li>
      <Link href="/teacher-details">Teachers Details</Link>
    </li>
  </Fragment>
);
export const Classes = () => (
  <Fragment>
    <li>
      <Link href="/classes">Classes</Link>
    </li>
    <li>
      <Link href="/classe-details">Classes Details</Link>
    </li>
  </Fragment>
);
export const Event = () => (
  <Fragment>
    <li>
      <Link href="/events">Event</Link>
    </li>
    <li>
      <Link href="/event2">Event 2</Link>
    </li>
    <li>
      <Link href="/event-details">Events Details</Link>
    </li>
  </Fragment>
);
export const Program = () => (
  <Fragment>
    <li>
      <Link href="/program">Program</Link>
    </li>
    <li>
      <Link href="/program-infant">program details</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog-grid">blog grid</Link>
    </li>
    <li>
      <Link href="/blog-list">blog list</Link>
    </li>
    <li>
      <Link href="/blog-single">blog single</Link>
    </li>
  </Fragment>
);
export const Shop = () => (
  <Fragment>
    <li>
      <Link href="/shop">Shop</Link>
    </li>
    <li>
      <Link href="/shop-details">Shop Details</Link>
    </li>
  </Fragment>
);
export const About = () => <Link href="/about">About</Link>;
export const Contact = () => <Link href="/contact">CONTACTS</Link>;
export const ProgramsLink = () => <Link href="/program">Programs</Link>;
export const Franchise = () => <Link href="/franchise">Franchise</Link>;
export const Faq = () => <Link href="/faq">FAQ</Link>;
export const BlogLink = () => <Link href="/blog">Blog</Link>;
export const Locations = () => (
  <Fragment>
    <Link href="/location">
      <a>Location</a>
    </Link>
    <ul className="sub-menu">
      {locations.map((location) => (
        <li key={location.id}>
          <Link href={location.detailUrl}>
            <a>{location.navName}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Fragment>
);
