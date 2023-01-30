import React, { useRef, useState } from "react";
import "./Portfolio.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import portfolioimg_1 from "../../Images/portfolioimg_1.png";
import portfolioimg_2 from "../../Images/portfolioimg_2.png";
import portfolioimg_3 from "../../Images/portfolioimg_3.png";
import portfolioimg_4 from "../../Images/portfolioimg_4.png";
import { FaPlus, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import TestimonialComonent from "../TestimonialComponent/TestimonialComonent";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
    btn1,
    btn2,
  } = rest;
  return (
    <div className="carousel-button-group">
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
        ref={btn1}
      >
        <FaArrowLeft />
      </button>
      <button onClick={() => next()} ref={btn2}>
        <FaArrowRight />
      </button>
    </div>
  );
};

const PortfolioComponent = () => {
  const [counter, setCounter] = useState(false);

  const btn1 = useRef();
  const btn2 = useRef();
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
      items: 1,
    },
  };

  const handleLeft = () => {
    btn1.current.click();
  };
  const handleRight = () => {
    btn2.current.click();
  };

  return (
    <div id="portfolio">
      <div className="portfoliobg">
        <div className="portfolio_banner_container">
          <h5 className="portfolio_subtext">Our Case Studies</h5>
        </div>
      </div>
      <div className="portfolio_testimonial_BG">
        <div className="portfolio_carosal_container">
          <div className="portfolio_heading">
            <h2 className="portfolioHeading section_header">
              Let’s looks our global projects
            </h2>
            <div className="btn_groups">
              <div className="arrow_btn" onClick={handleLeft}>
                <FaArrowLeft />
              </div>
              <div className="arrow_btn" onClick={handleRight}>
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="portfolio_carousel">
            <Carousel
              arrows={false}
              responsive={responsive}
              customButtonGroup={<ButtonGroup btn1={btn1} btn2={btn2} />}
              infinite={true}
            >
              <div className="portfolio_carosel_card">
                <div>
                  <img
                    src={portfolioimg_1}
                    alt="portfolioimg_1"
                    className="portfolioImg"
                  />
                </div>
                <div className="portfolio_text_cont">
                  <div>
                    <h3 className="portfolio_block_heading">Business Growth</h3>
                    <p className="portfolio_blog_para">Consulting</p>
                  </div>
                  <div className="block_circle">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="portfolio_carosel_card">
                <div>
                  <img
                    src={portfolioimg_2}
                    alt="portfolioimg_2"
                    className="portfolioImg"
                  />
                </div>
                <div className="portfolio_text_cont">
                  <div>
                    <h3 className="portfolio_block_heading">Business Growth</h3>
                    <p className="portfolio_blog_para">Consulting</p>
                  </div>
                  <div className="block_circle">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="portfolio_carosel_card">
                <div>
                  <img
                    src={portfolioimg_3}
                    alt="portfolioimg_3"
                    className="portfolioImg"
                  />
                </div>
                <div className="portfolio_text_cont">
                  <div>
                    <h3 className="portfolio_block_heading">Business Growth</h3>
                    <p className="portfolio_blog_para">Consulting</p>
                  </div>
                  <div className="block_circle">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="portfolio_carosel_card">
                <div>
                  <img
                    src={portfolioimg_4}
                    alt="portfolioimg_4"
                    className="portfolioImg"
                  />
                </div>
                <div className="portfolio_text_cont">
                  <div>
                    <h3 className="portfolio_block_heading">Business Growth</h3>
                    <p>Consulting</p>
                  </div>
                  <div className="block_circle">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="portfolio_carosel_card">
                <div>
                  <img
                    src={portfolioimg_3}
                    alt="portfolioimg_3"
                    className="portfolioImg"
                  />
                </div>
                <div className="portfolio_text_cont">
                  <div>
                    <h3 className="portfolio_block_heading">Business Growth</h3>
                    <p className="portfolio_blog_para">Consulting</p>
                  </div>
                  <div className="block_circle">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="portfolio_carosel_card">
                <div>
                  <img
                    src={portfolioimg_4}
                    alt="portfolioimg_4"
                    className="portfolioImg"
                  />
                </div>
                <div className="portfolio_text_cont">
                  <div>
                    <h3 className="portfolio_block_heading">Business Growth</h3>
                    <p className="portfolio_blog_para"> Consulting</p>
                  </div>
                  <div className="block_circle">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="portfolio_carosel_card">
                <div>
                  <img
                    src={portfolioimg_3}
                    alt="portfolioimg_3"
                    className="portfolioImg"
                  />
                </div>
                <div className="portfolio_text_cont">
                  <div>
                    <h3 className="portfolio_block_heading">Business Growth</h3>
                    <p className="portfolio_blog_para">Consulting</p>
                  </div>
                  <div className="block_circle">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="portfolio_carosel_card">
                <div>
                  <img
                    src={portfolioimg_4}
                    alt="portfolioimg_4"
                    className="portfolioImg"
                  />
                </div>
                <div className="portfolio_text_cont">
                  <div>
                    <h3 className="portfolio_block_heading">Business Growth</h3>
                    <p className="portfolio_blog_para">Consulting</p>
                  </div>
                  <div className="block_circle">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="portfolio_carosel_card">
                <div>
                  <img
                    src={portfolioimg_3}
                    alt="portfolioimg_3"
                    className="portfolioImg"
                  />
                </div>
                <div className="portfolio_text_cont">
                  <div>
                    <h3 className="portfolio_block_heading">Business Growth</h3>
                    <p className="portfolio_blog_para">Consulting</p>
                  </div>
                  <div className="block_circle">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="portfolio_carosel_card">
                <div>
                  <img
                    src={portfolioimg_4}
                    alt="portfolioimg_4"
                    className="portfolioImg"
                  />
                </div>
                <div className="portfolio_text_cont">
                  <div>
                    <h3 className="portfolio_block_heading">Business Growth</h3>
                    <p className="portfolio_blog_para">Consulting</p>
                  </div>
                  <div className="block_circle">
                    <FaPlus />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="skill_container">
          <div className=" contents">
            <div className="cards">
              <p className="transparent">20</p>
              <ScrollTrigger
                onEnter={() => setCounter(true)}
                onExit={() => setCounter(false)}
              >
                <p className="counts">
                  {counter && (
                    <CountUp start={0} end={20} duration={1} delay={0} />
                  )}
                </p>
              </ScrollTrigger>
              {/* <p className="counts">20</p> */}
            </div>
            <h4 className="skill_text">SKILLED EXPERTS</h4>
          </div>
          <div className=" contents">
            <div className="cards">
              <p className="transparent">3k</p>
              <ScrollTrigger
                onEnter={() => setCounter(true)}
                onExit={() => setCounter(false)}
              >
                <p className="counts">
                  {counter && (
                    <CountUp start={0} end={2} duration={1} delay={0} />
                  )}
                  k
                </p>
              </ScrollTrigger>
              {/* <p className="counts">3k</p> */}
            </div>
            <h4 className="skill_text">SUCCESSFUL PROJECTS</h4>
          </div>
          <div className=" contents">
            <div className="cards">
              <p className="transparent">9k</p>
              <ScrollTrigger
                onEnter={() => setCounter(true)}
                onExit={() => setCounter(false)}
              >
                <p className="counts">
                  {counter && (
                    <CountUp start={0} end={9} duration={1} delay={0} />
                  )}
                  k
                </p>
              </ScrollTrigger>
              {/* <p className="counts">9k</p> */}
            </div>
            <h4 className="skill_text">HAPPY CLIENTS</h4>
          </div>
          <div className=" contents">
            <div className="cards">
              <p className="transparent">218</p>
              <ScrollTrigger
                onEnter={() => setCounter(true)}
                onExit={() => setCounter(false)}
              >
                <p className="counts">
                  {counter && (
                    <CountUp start={200} end={218} duration={1} delay={0} />
                  )}
                </p>
              </ScrollTrigger>
              {/* <p className="counts">218</p> */}
            </div>
            <h4 className="skill_text">MEDIA ACTIVITIES</h4>
          </div>
        </div>
        <TestimonialComonent />
      </div>
    </div>
  );
};

export default PortfolioComponent;
