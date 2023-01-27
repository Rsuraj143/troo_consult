import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import team_1 from "../../Images/team-1.png";
import team_2 from "../../Images/team-2.png";
import team_3 from "../../Images/team-3.png";
import team_4 from "../../Images/team-4.png";

import Facebook from "../../Images/FB.svg";
import Instagram from "../../Images/Insta.svg";
import Linkdhin from "../../Images/Link.svg";
import Twitter from "../../Images/Twitter.svg";

import J_animate from "../../Images/J_animate.svg";

const TeamComponent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2200, min: 1440 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1200 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1200, min: 767 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 3,
    },
  };
  return (
    <div id="teams">
      <div className="team_container">
        <h5 className="subheading">Meet Our Team</h5>
        <div className="team_heading">
          <h2 className="section_header">We have skilled people</h2>
          <div>
            <Link>
              <button className="button">
                <p className="btn_text">+ View All Member</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="team_carousel_container">
          <Carousel
            arrows={false}
            responsive={responsive}
            infinite={true}
            showDots={true}
          >
            <div className="team_carosel_card">
              <div>
                <div className="team_img_bg">
                  <img src={team_1} alt="teamImg_1" className="teamImg" />
                </div>
                <div className="team_icon_cont">
                  <img src={Facebook} alt="facebook" />
                  <img src={Instagram} alt="facebook" />
                  <img src={Linkdhin} alt="facebook" />
                  <img src={Twitter} alt="facebook" />
                </div>
              </div>
              <div className="team_text_container">
                <div>
                  <h4 className="team_name">Business Growth</h4>
                  <p className="team_designation">Consulting</p>
                </div>
              </div>
            </div>

            <div className="team_carosel_card">
              <div>
                <div className="team_img_bg">
                  <img src={team_2} alt="team_2" className="teamImg" />
                </div>
                <div className="team_icon_cont">
                  <img src={Facebook} alt="facebook" />
                  <img src={Instagram} alt="facebook" />
                  <img src={Linkdhin} alt="facebook" />
                  <img src={Twitter} alt="facebook" />
                </div>
              </div>
              <div className="team_text_container">
                <h4 className="team_name">Business Growth</h4>
                <p>Consulting</p>
              </div>
            </div>
            <div className="team_carosel_card">
              <div>
                <div className="team_img_bg">
                  <img src={team_3} alt="team_3" className="teamImg" />
                </div>
                <div className="team_icon_cont">
                  <img src={Facebook} alt="facebook" />
                  <img src={Instagram} alt="facebook" />
                  <img src={Linkdhin} alt="facebook" />
                  <img src={Twitter} alt="facebook" />
                </div>
                <div></div>
              </div>
              <div className="team_text_container">
                <h4 className="team_name">Business Growth</h4>
                <p>Consulting</p>
              </div>
            </div>
            <div className="team_carosel_card">
              <div>
                <div className="team_img_bg">
                  <img src={team_4} alt="team_4" className="teamImg" />
                </div>
                <div className="team_icon_cont">
                  <img src={Facebook} alt="facebook" />
                  <img src={Instagram} alt="facebook" />
                  <img src={Linkdhin} alt="facebook" />
                  <img src={Twitter} alt="facebook" />
                </div>
              </div>
              <div className="team_text_container">
                <h4 className="team_name">Business Growth</h4>
                <p>Consulting</p>
              </div>
            </div>
            <div className="team_carosel_card">
              <div>
                <div className="team_img_bg">
                  <img src={team_1} alt="team_1" className="teamImg" />
                </div>
                <div className="team_icon_cont">
                  <img src={Facebook} alt="facebook" />
                  <img src={Instagram} alt="facebook" />
                  <img src={Linkdhin} alt="facebook" />
                  <img src={Twitter} alt="facebook" />
                </div>
              </div>
              <div className="team_text_container">
                <h4 className="team_name">Business Growth</h4>
                <p>Consulting</p>
              </div>
            </div>
            <div className="team_carosel_card">
              <div>
                <div className="team_img_bg">
                  <img src={team_2} alt="team_2" className="teamImg" />
                </div>
                <div className="team_icon_cont">
                  <img src={Facebook} alt="facebook" />
                  <img src={Instagram} alt="facebook" />
                  <img src={Linkdhin} alt="facebook" />
                  <img src={Twitter} alt="facebook" />
                </div>
              </div>
              <div className="team_text_container">
                <h4 className="team_name">Business Growth</h4>
                <p>Consulting</p>
              </div>
            </div>
            <div className="team_carosel_card">
              <div>
                <div className="team_img_bg">
                  <img src={team_3} alt="team_3" className="teamImg" />
                </div>
                <div className="team_icon_cont">
                  <img src={Facebook} alt="facebook" />
                  <img src={Instagram} alt="facebook" />
                  <img src={Linkdhin} alt="facebook" />
                  <img src={Twitter} alt="facebook" />
                </div>
              </div>
              <div className="team_text_container">
                <h4 className="team_name">Business Growth</h4>
                <p>Consulting</p>
              </div>
            </div>
            <div className="team_carosel_card">
              <div>
                <div className="team_img_bg">
                  <img src={team_4} alt="team_4" className="teamImg" />
                </div>
                <div className="team_icon_cont">
                  <img src={Facebook} alt="facebook" />
                  <img src={Instagram} alt="facebook" />
                  <img src={Linkdhin} alt="facebook" />
                  <img src={Twitter} alt="facebook" />
                </div>
              </div>
              <div className="team_text_container">
                <h4 className="team_name">Business Growth</h4>
                <p>Consulting</p>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="team_consultation_container">
          <div className="consultant_inner_container">
            <div className="consultation_text_cont">
              <div className="consult_left">
                <h2 className="section_header">Get free consultations! we’re ready to work together</h2>
              </div>
              <div className="consult_right">
                <img src={J_animate} alt="j_animate" className="j_animate" />
                <div className="consult_btn">
                  <Link>
                    <button className="consultant_btn">
                      <p className="consultant_btn_text">
                        Get Free Consultations! +
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
