import "./HeaderComponent.css";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import Facebook from "../../Images/FB.svg";
import Instagram from "../../Images/Insta.svg";
import Linkdhin from "../../Images/Link.svg";
import Twitter from "../../Images/Twitter.svg";
import { Link, NavLink } from "react-router-dom";
import WebLogo from "../../Images/Logo.svg";
import phonIcon from "../../Images/Phone.svg";

const HeaderComponent = () => {
  return (
    <div className="troo_header">
      <div className="troo_header_address_section">
        <div className="troo_address">
          <div className="troo_address_location">
            <span>
              <CiLocationOn />
            </span>
            <span>
              <h5>4516 School Street, Danbury, CT, Canada</h5>
            </span>
          </div>
          <div className="troo_address_mail">
            <span>
              <HiOutlineMailOpen />
            </span>
            <span>
              <h5>example@email.com</h5>
            </span>
          </div>
        </div>
        <div className="troo_address_header">
          <h4>
            Welcome to
            <span className="troo_address_header_bold">TROO Consultancy</span>
          </h4>
        </div>
        <div className="troo_icons">
          <h5 className="troo_icon_text">Follow Us on</h5>
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="facebook" />
          <img src={Linkdhin} alt="facebook" />
          <img src={Twitter} alt="facebook" />
        </div>
      </div>

      <div className="troo_nav_bar">
        <div className="webLogo">
          <Link to="/">
            <img src={WebLogo} className="logoImg" alt="img" />
          </Link>
        </div>
        <div>
          <Drawer className="nav-manu" />
        </div>
        <div>
          <Link>
            <button className="button">
              <p className="btn_text">+ Consult With Us</p>
            </button>
          </Link>
        </div>
        <div className="contact_class">
          <div className="imgphone">
            <img src={phonIcon} alt="phoneIcon" />
          </div>

          <div className="numbertext">
            <p>Call Us on</p>
            <span className="contactNumber">+44 123 456 7890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

const Drawer = (props) => {
  const activeLink = "text-danger";
  const normal = "";
  return (
    <ul {...props}>
      <li>
        <a
          className={({ isActive }) => (isActive ? activeLink : normal)}
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className={({ isActive }) => (isActive ? activeLink : normal)}
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#service"
          className={({ isActive }) => (isActive ? activeLink : normal)}
        >
          Our Services
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          className={({ isActive }) => (isActive ? activeLink : normal)}
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#teams"
          className={({ isActive }) => (isActive ? activeLink : normal)}
        >
          Our Team
        </a>
      </li>
      <li>
        <a
          href="#testimonial"
          className={({ isActive }) => (isActive ? activeLink : normal)}
        >
          Testimonial
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className={({ isActive }) => (isActive ? activeLink : normal)}
        >
          Contact Us
        </a>
      </li>
    </ul>
  );
};
