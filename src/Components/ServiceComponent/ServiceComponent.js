import React from "react";
import "./ServiceComponent.css";
import { Link } from "react-router-dom";
import serviceImg_1 from "../../Images/serviceImg_1.png";
import serviceImg_2 from "../../Images/serviceImg_2.png";
import serviceImg_3 from "../../Images/serviceImg_3.png";
import serviceImg_4 from "../../Images/serviceImg_4.png";
import serviceImg_5 from "../../Images/serviceImg_5.png";
import serviceImg_6 from "../../Images/serviceImg_6.png";

const ServiceComponent = () => {
  return (
    <div className="troo_service_section" id="service">
      <div className="troo_service_container">
        <div className="troo_service_heading_cont">
          <h5 className="subheading service_sub_heading">
            What We Do Four You
          </h5>
          <h2 className="service_main_heading section_header">We provide exclusive </h2>
          <h2 className="service_main_heading section_header">consultancy service</h2>
        </div>
        <div className="troo_service_cards">
          <div className="service_cards">
            <div className="servicecard">
              <div>
                <img
                  src={serviceImg_1}
                  alt="serviceImg_1"
                  className="serviceImg"
                />
              </div>
              <div className="serviceBlock">
                <h3>Expense Reporting</h3>
              </div>
              <div className="service_hover_block">
                <h3>Expense Reporting</h3>
                <p>
                  Lorem ipsum dolor sit abet, consetetur sadipscing elitr, sed
                  diam inta nonu my eirmod.
                </p>
                <Link to="">
                  <h5 className="view_dtls">View Detail</h5>
                </Link>
              </div>
            </div>
            <div className="servicecard">
              <div>
                <img
                  src={serviceImg_2}
                  alt="serviceImg_2"
                  className="serviceImg"
                />
              </div>
              <div className="serviceBlock">
                <h3>Consulting</h3>
              </div>
              <div className="service_hover_block">
                <h3>Consulting</h3>
                <p>
                  Lorem ipsum dolor sit abet, consetetur sadipscing elitr, sed
                  diam inta nonu my eirmod.
                </p>
                <Link to="" >
                  <h5 className="view_dtls">View Detail</h5>
                </Link>
              </div>
            </div>
            <div className="servicecard">
              <div>
                <img
                  src={serviceImg_3}
                  alt="serviceImg_3"
                  className="serviceImg"
                />
              </div>
              <div className="serviceBlock">
                <h3>Expense Reporting</h3>
              </div>
              <div className="service_hover_block">
                <h3>Expense Reporting</h3>
                <p>
                  Lorem ipsum dolor sit abet, consetetur sadipscing elitr, sed
                  diam inta nonu my eirmod.
                </p>
                <Link to="">
                  <h5 className="view_dtls">View Detail</h5>
                </Link>
              </div>
            </div>
            <div className="servicecard">
              <div>
                <img
                  src={serviceImg_4}
                  alt="serviceImg_4"
                  className="serviceImg"
                />
              </div>
              <div className="serviceBlock">
                <h3>Audit & Assurance</h3>
              </div>
              <div className="service_hover_block">
                <h3>Audit & Assurance</h3>
                <p>
                  Lorem ipsum dolor sit abet, consetetur sadipscing elitr, sed
                  diam inta nonu my eirmod.
                </p>
                <Link to="">
                  <h5 className="view_dtls">View Detail</h5>
                </Link>
              </div>
            </div>
            <div className="servicecard">
              <div>
                {" "}
                <img
                  src={serviceImg_5}
                  alt="serviceImg_5"
                  className="serviceImg"
                />
              </div>
              <div className="serviceBlock">
                <h3>Cord Processing</h3>
              </div>
              <div className="service_hover_block">
                <h3>Cord Processing</h3>
                <p>
                  Lorem ipsum dolor sit abet, consetetur sadipscing elitr, sed
                  diam inta nonu my eirmod.
                </p>
                <Link to="">
                  <h5 className="view_dtls">View Detail</h5>
                </Link>
              </div>
            </div>
            <div className="servicecard">
              <div>
                <img
                  src={serviceImg_6}
                  alt="serviceImg_6"
                  className="serviceImg"
                />
              </div>
              <div className="serviceBlock">
                <h3>Financial Audit</h3>
              </div>
              <div className="service_hover_block">
                <h3>Financial Audit</h3>
                <p>
                  Lorem ipsum dolor sit abet, consetetur sadipscing elitr, sed
                  diam inta nonu my eirmod.
                </p>
                <Link to="">
                  <h5 className="view_dtls">View Detail</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="service_buttom_text">
            <p>Want See More Services? </p>
            <Link>
              <h4>CLICK HERE</h4>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
