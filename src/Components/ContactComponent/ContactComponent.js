import React from "react";
import "./ContactComponent.css";
import { Link } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";

const ContactComponent = () => {
  return (
    <div id="contact">
      <div className="contact_section">
        <div className="contact_container" div >
          <h5 className="subheading">How can we help?</h5>
          <div className="contact_heading">
            <div className="contact_left">
              <h2 className="section_header">
                Have any questions ? Frequently asked questions
              </h2>
            </div>
            <div className="contact_right">
              <div className="find_contact">
                <p>Don’t find answer?</p>
                <p className="find_contact_highlight">Contact with us on</p>
              </div>
              <div>
                <Link>
                  <button className="normal_btn">
                    <div className="contact_btn_inner">
                      <div className="phone_icon">
                        <BiPhone />{" "}
                      </div>
                      <div className="phone_text_cont">
                        <p className="phone_text">Call Us on</p>
                        <p className="phone_num">+44 123 456 7890</p>
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="contact_accordian_section">
            <div className="contact_accordian_container">
              <div className="accordion_contact_left">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item className="accordion-item" eventKey="0">
                    <Accordion.Header>
                      <span className="questionmark">
                        <FaQuestion />
                      </span>{" "}
                      How to Getting Started your Business?
                    </Accordion.Header>
                    <Accordion.Body>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="questionmark">
                        <FaQuestion />
                      </span>{" "}
                      Why do I need a business consulting service?
                    </Accordion.Header>
                    <Accordion.Body>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {" "}
                      <span className="questionmark">
                        <FaQuestion />
                      </span>{" "}
                      What’s the difference a consultant and a coach?
                    </Accordion.Header>
                    <Accordion.Body>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <span className="questionmark">
                        <FaQuestion />
                      </span>{" "}
                      What kind of experience does your business consulting?
                    </Accordion.Header>
                    <Accordion.Body>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      {" "}
                      <span className="questionmark">
                        <FaQuestion />
                      </span>{" "}
                      What are the terms of working a business consultant?
                    </Accordion.Header>
                    <Accordion.Body>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="accordion_ncontact_right">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <span className="questionmark">
                        <FaQuestion />
                      </span>{" "}
                      How to Getting Started your Business?
                    </Accordion.Header>
                    <Accordion.Body>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="questionmark">
                        <FaQuestion />
                      </span>{" "}
                      How much does it cost to hire a business consultant?
                    </Accordion.Header>
                    <Accordion.Body>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {" "}
                      <span className="questionmark">
                        <FaQuestion />
                      </span>{" "}
                      What industries or businesses do you specialize in?
                    </Accordion.Header>
                    <Accordion.Body>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <span className="questionmark">
                        <FaQuestion />
                      </span>{" "}
                      How do you price your services?
                    </Accordion.Header>
                    <Accordion.Body>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      {" "}
                      <span className="questionmark">
                        <FaQuestion />
                      </span>{" "}
                      Do you offer a free consultation?
                    </Accordion.Header>
                    <Accordion.Body>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="accordian_btn">
            <button className="button">
              <p className="btn_text">+ View All FAQ’s</p>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
