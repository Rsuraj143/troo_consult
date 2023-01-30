import React from "react";
import "./Testimonial.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar } from "react-icons/fa";
import quotes from "../../Images/quotes.svg";
import testimonial_img1 from "../../Images/testimonial_img-1.svg";
import testimonial_img2 from "../../Images/testimonial_img-2.svg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2200, min: 1440 },
    items: 2,
    slidesToSlide: 1,
    paritialVisibilityGutter: 10,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1200 },
    items: 2,
    slidesToSlide: 1,
    paritialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1200, min: 767 },
    items: 2,
    paritialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
    paritialVisibilityGutter: 10,
  },
};

const TestimonialComonent = () => {
  return (
    <div id="testimonial">
      <div className="testimonial_container">
        <div className="troo_service_heading_cont">
          <h5 className="subheading service_sub_heading">
            Clients Testtimonials
          </h5>
          <h2 className="section_header T_header">What our clients say</h2>
          <h2 className="section_header T_header">about our services</h2>
        </div>
        <div className="testimonmial_caurosel">
          <Carousel
            responsive={responsive}
            showDots={true}
            swipeable={true}
            infinite={true}
            draggable={true}
            keyBoardControl={true}
          >
            <div className="testimonial_cards">
              <div className="testimonial_card_heading">
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <img src={quotes} alt="quotes" />
                </div>
              </div>
              <p className="testimonial_para">
                Lorem Ipsum is simply dum rummy dummy text of the printing and
                typesetting’s the industry's standard dummy text ever since the
                150 when printed galley of type. Ipsum is simply dummy rummy
                text of the printing and standard dummy text.
              </p>
              <div className="testimonial_profile">
                <img
                  src={testimonial_img1}
                  alt="testimonial_img1"
                  className="feedback_person"
                />
                <div>
                  <h4>Michael Hensley</h4>
                  <p>Business Manager</p>
                </div>
              </div>
            </div>
            <div className="testimonial_cards">
              <div className="testimonial_card_heading">
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <img src={quotes} alt="quotes" />
                </div>
              </div>
              <p className="testimonial_para">
                Lorem Ipsum is simply dum rummy dummy text of the printing and
                typesetting’s the industry's standard dummy text ever since the
                150 when printed galley of type. Ipsum is simply dummy rummy
                text of the printing and standard dummy text.
              </p>
              <div className="testimonial_profile">
                <img
                  src={testimonial_img2}
                  alt="testimonial_img2"
                  className="feedback_person"
                />
                <div>
                  <h4>Michael Hensley</h4>
                  <p>Business Manager</p>
                </div>
              </div>
            </div>
            <div className="testimonial_cards">
              <div className="testimonial_card_heading">
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <img src={quotes} alt="quotes" />
                </div>
              </div>
              <p className="testimonial_para">
                Lorem Ipsum is simply dum rummy dummy text of the printing and
                typesetting’s the industry's standard dummy text ever since the
                150 when printed galley of type. Ipsum is simply dummy rummy
                text of the printing and standard dummy text.
              </p>
              <div className="testimonial_profile">
                <img
                  src={testimonial_img1}
                  alt="testimonial_img1"
                  className="feedback_person"
                />
                <div>
                  <h4>Michael Hensley</h4>
                  <p>Business Manager</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComonent;
