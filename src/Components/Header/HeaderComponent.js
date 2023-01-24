import "./HeaderComponent.css";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import Facebook from "../../Images/FB.svg";
import Instagram from "../../Images/Insta.svg";
import Linkdhin from "../../Images/Link.svg";
import Twitter from "../../Images/Twitter.svg";
import { Link } from "react-router-dom";
import WebLogo from "../../Images/Logo.svg";
import phonIcon from "../../Images/Phone.svg";
import { useEffect, useRef, useState } from "react";

const HeaderComponent = () => {
  const [show, setShow] = useState(false);

  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    console.log(window.scrollY);
    if (window.scrollY > 80) {
          setShow(false);
        } else {
          setShow(true);
        }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return <div>{show ? <ShowNav /> : <HideNav />}</div>;
};

export default HeaderComponent;

const ShowNav = () => {
  return (
      <div className="show_nav">
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

const HideNav = () => {
  return (
    <div className="troo_header">
      <div className="troo_header_address_section">
        <div className="troo_address">
          <div className="troo_address_location">
            <span>
              <CiLocationOn />
            </span>
            <span className="address_default">
              <h5>4516 School Street, Danbury, CT, Canada</h5>
            </span>
          </div>
          <div className="troo_address_mail">
            <span >
              <HiOutlineMailOpen />
            </span>
            <span className="address_default" >
              <h5>example@email.com</h5>
            </span>
          </div>
        </div>
        <div className="troo_address_header">
          <div>
            Welcome to
            <span className="troo_address_header_bold">TROO Consultancy</span>
          </div>
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
        <div className="navmanu_contain">
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
