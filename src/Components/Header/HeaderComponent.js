import "./HeaderComponent.css";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import Facebook from "../../Images/FB.svg";
import Instagram from "../../Images/Insta.svg";
import Linkdhin from "../../Images/Link.svg";
import Twitter from "../../Images/Twitter.svg";
import { Link } from "react-scroll";
import { MdClose } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

import WebLogo from "../../Images/Logo.svg";
import phonIcon from "../../Images/Phone.svg";
import { useEffect, useRef, useState } from "react";

const HeaderComponent = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navbar_ref = useRef();
  function handleScroll() {
    if (window.pageYOffset > 20 || document.documentElement.scrollTop > 20) {
      navbar_ref.current.style.top = "0";
    } else {
      navbar_ref.current.style.top = "-150px";
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="show_nav" ref={navbar_ref}>
        <div className="troo_nav_bar">
          <div className="webLogo">
            <Link to="/">
              <img src={WebLogo} className="logoImg" alt="img" />
            </Link>
          </div>
          <div
            className={
              click
                ? "nav-manu active navmanu_contain"
                : "nav-manu navmanu_contain"
            }
          >
            <Drawer handleClick={handleClick} />
          </div>
          <div className="nav_bar_btn">
            <Link>
              <button className="button">
                <p className="btn_text">+ Book A Appointment</p>
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
          <div className="humburgerLogo">
            {click ? (
              <MdClose
                size={40}
                style={{ color: "#fff" }}
                onClick={handleClick}
              ></MdClose>
            ) : (
              <RiMenu3Line onClick={handleClick} />
            )}
            <div
              className={`hamburger_btn_manu ${
                click ? "drawer_open" : "drawer_close"
              }`}
            >
              <div className="drawer_container">
                <div className="drawer_manu">
                  <Drawer handleClick={handleClick} />
                  <Link to="contact" className="contact_drawer">
                    <p>Call Us on</p>
                    <p>+44 123 456 7890</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hide Nav bar */}
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
              <span>
                <HiOutlineMailOpen />
              </span>
              <span className="address_default">
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
          <div
            className={
              click
                ? "nav-manu active navmanu_contain"
                : "nav-manu navmanu_contain"
            }
          >
            <Drawer handleClick={handleClick} />
          </div>
          <div className="nav_bar_btn">
            <Link>
              <button className="button">
                <p className="btn_text">+ Book A Appointment</p>
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
          <div className="humburgerLogo">
            {click ? (
              <MdClose
                size={40}
                style={{ color: "#fff" }}
                onClick={handleClick}
              ></MdClose>
            ) : (
              <RiMenu3Line onClick={handleClick} />
            )}
            <div
              className={`hamburger_btn_manu ${
                click ? "drawer_open" : "drawer_close"
              }`}
            >
              <div className="drawer_container">
                <div className="drawer_manu">
                  <Drawer handleClick={handleClick} />
                  <Link to="contact" className="contact_drawer">
                    <p>Call Us on</p>
                    <p>+44 123 456 7890</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;

const Drawer = (props) => {
  return (
    <ul>
      <li>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => props.handleClick()}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => props.handleClick()}
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="service"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => props.handleClick()}
        >
          Our Services
        </Link>
      </li>
      <li>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => props.handleClick()}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="teams"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => props.handleClick()}
        >
          Our Team
        </Link>
      </li>
      <li>
        <Link
          to="testimonial"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => props.handleClick()}
        >
          Testimonial
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => props.handleClick()}
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
};
