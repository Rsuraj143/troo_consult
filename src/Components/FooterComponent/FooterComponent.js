import React from "react";
import { Link } from "react-router-dom";
import "./FooterComponent.css";
import WebLogo from "../../Images/Logo.svg";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import Facebook from "../../Images/FB.svg";
import Instagram from "../../Images/Insta.svg";
import Linkdhin from "../../Images/Link.svg";
import Twitter from "../../Images/Twitter.svg";

const FooterComponent = () => {
  return (
    <div className="footer_section">
      <div className="footer_container">
        <div className="footer_header">
          <h2 className="section_header f_heading">Subscribe Our Newslatter</h2>
          <p className="footer_header_para">
            Troothemes tech transformers are on a mission to arm creators with
            marketing
          </p>
          <p className="footer_header_para">materials that enhance digital presence.</p>
          <form className="form_cont">
            <input
              type="scarch"
              placeholder="Enter your email"
              className="scarch"
            />
            <Link className="scarch_btn">
              <button className="normal_btn ">
                <p className="subscribe_btn_text">Subscribe Now +</p>
              </button>
            </Link>
          </form>
        </div>
        <hr className="customHR"/>
        <div className="footer_manu_container">
          <div className="footer_card_left">
            <div className="manu_right_logo">
              <div className="footer_logo">
                <Link to="/">
                  <img src={WebLogo} className="logoImg" alt="img" />
                </Link>
              </div>
              <div className="footer_logo_para">
                <p>
                  Lorem Ipsum is simply dum rummy dummy text of the printing and
                  typesetting’s the and it industry's standard dummy text ever
                  since the 150.
                </p>
              </div>
              <div className="footer_social_icons">
                <h5 className="footer_icon_text">Follow Us on : </h5>
                <img src={Facebook} alt="facebook" />
                <img src={Instagram} alt="facebook" />
                <img src={Linkdhin} alt="facebook" />
                <img src={Twitter} alt="facebook" />
              </div>
            </div>
          </div>
          <div className="footer_middle">
            <div className="manu_right_manu">
              <div className="footer_nav_manu">
                <h4>Navigation</h4>
              </div>
              <ul className="footer_list">
                <li>About us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Jobs</li>
                <li>In Press</li>
              </ul>
            </div>
            <div className="manu_left_manu">
              <div className="footer_nav_manu">
                <h4>FAQ</h4>
              </div>
              <ul className="footer_list">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
                <li>Returns</li>
              </ul>
            </div>
          </div>
          <div className=" footer_card_right">
            <div className="manu_left_contact_us">
              <div className="contact_us_container">
                <h3>CONTACT US</h3>
                <div className="footer_contacts">
                <div className="call_detaile">
                  <div className="footer_address_icon">
                    <HiOutlinePhone />
                  </div>
                  <div className="footer_address_details">
                    <p>Call Us on</p>
                    <h4>+44 123 456 7890</h4>
                  </div>
                </div>
                <div className="call_detaile">
                  <div className="footer_address_icon">
                    <HiOutlineMail />
                  </div>
                  <div className="footer_address_details">
                    <p>Email Us on</p>
                    <h4>example@email.com</h4>
                  </div>
                </div>
                <div className="call_detaile">
                  <div className="footer_address_icon">
                    <HiOutlineLocationMarker />
                  </div>
                  <div className="footer_address_details">
                    <p>Address</p>
                    <h4>4516 School Street Danbury, CT, Canada</h4>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="dashed_line" />
        <div className="footer_bottom">
          <p>Copyright © 2023. <Link className="trootheme">troothemes</Link>. All rights reserved.</p>
          <div className="footer_term_condtion">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <hr className="footer_bottom_hr" />
      </div>
    </div>
  );
};

export default FooterComponent;
