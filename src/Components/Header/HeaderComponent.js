import "./HeaderComponent.css";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import Facebook from "../../Images/FB.svg";
import Instagram from "../../Images/Insta.svg";
import Linkdhin from "../../Images/Link.svg";
import Twitter from "../../Images/Twitter.svg";
import { Link } from "react-scroll";

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
      console.log(currentScrollY, prevScrollY.current);
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(true);
        console.log(false, currentScrollY);
        console.log("------------5000000000000000----------------");
        // if (currentScrollY >= 100) {
        //   setShow(false);
        // } else {
        //   setShow(true);
        // }
      }
      if (currentScrollY && goingUp <= 100) {
        console.log("-----true------");
        setShow(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
        console.log(true, currentScrollY);
        if (currentScrollY >= 100) {
          // setShow(false);
          console.log("------------1000000000000000----------------");
        }
      }

      if (window.scrollY <= 100) {
        setShow(false);
      } else if (window.scrollY > 99) {
        setShow(true);
      }

      prevScrollY.current = currentScrollY;
      // console.log(goingUp, currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // console.log(window.scrollY);
    // if (window.scrollY <= 100 && show) {
    //       setShow(false);
    //     } else if(window.scrollY > 100 && !show){
    //       setShow(true);
    //     }

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
        <div className="navmanu_contain">
          <Drawer  />
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
 const [click, setClick] = useState(false)
 const handleClick = () => setClick(!click)
 const closeMenu = () => setClick(false)

  return (
    <ul {...props} className={click ?"nav-manu active":"nav-manu"}>
      <li>
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About Us</Link>
      </li>
      <li>
        <Link to="service" spy={true} smooth={true} offset={50} duration={500}>Our Services</Link>
      </li>
      <li>
        <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link>
      </li>
      <li>
        <Link to="teams" spy={true} smooth={true} offset={50} duration={500}>Our Team</Link>
      </li>
      <li>
        <Link to="testimonial" spy={true} smooth={true} offset={50} duration={500}>Testimonial</Link>
      </li>
      <li>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact Us</Link>
      </li>
    </ul>
  );
};
