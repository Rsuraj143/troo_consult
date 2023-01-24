import React from "react";
import "./Feture.css";
import business_process from "../../Images/business_process.svg";
import digital_solution from "../../Images/digital_solution.svg";
import product_eng from "../../Images/product_eng.svg";
import technology_service from "../../Images/technology_service.svg";
import arrowbtn from "../../Images/arrowbtn.svg";

const Feture = () => {
  return (
    <div className="feture_section">
      <div className="feture_text_container">
        <h4 className="subheading">How We Can Help You</h4>
        <div className="feture_heading_cont">
          <div className="feture_heding_left">
            <h2 className="section_header">We take care your business future to a next level</h2>
          </div>
          <div className="feture_heading_right">
            <p className="feture_heading_para">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              inta nonumy eirmod tempor invidunt .
            </p>
          </div>
        </div>
      </div>
      <div className="feture_card_section">
        <div className="feture_card_contaoner">
          <div class="feture_cards">
            <div class="fetureCard">
            <div class="layer_outer"></div>
              <img src={business_process} alt="business_process" className="feture_card_img" />
              <div className="feture_card_body">
                    <h3 className="feture_card_header">Business Process</h3>
                    <p className="feture_card_para">There are many variations passages Lorem it is available, but we are the majority have.</p>
              </div>
              <img src={arrowbtn} alt="arrowbtn"/>
            </div>
            <div class="fetureCard">
            <div class="layer_outer" ></div>
              <img src={product_eng} alt="business_process" className="feture_card_img"/>
              <div className="feture_card_body">
                    <h3 className="feture_card_header">Digital Solutions</h3>
                    <p className="feture_card_para">There are many variations passages Lorem it is available, but we are the majority have.</p>
              </div>
              <img src={arrowbtn} alt="arrowbtn"/>
            </div>
            <div class="fetureCard">
            <div class="layer_outer" ></div>
              <img src={technology_service} alt="business_process" className="feture_card_img" />
              <div className="feture_card_body">
                    <h3 className="feture_card_header">Product Engineering</h3>
                    <p className="feture_card_para">There are many variations passages Lorem it is available, but we are the majority have.</p>
              </div>
              <img src={arrowbtn} alt="arrowbtn"/>
            </div>
            <div class="fetureCard">
            <div class="layer_outer" ></div>
              <img src={digital_solution} alt="business_process" className="feture_card_img" />
              <div className="feture_card_body">
                    <h3 className="feture_card_header">Technology Services</h3>
                    <p className="feture_card_para">There are many variations passages Lorem it is available, but we are the majority have.</p>
              </div>
              <img src={arrowbtn} alt="arrowbtn"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feture;
