import React from "react";
import "./Portfolio.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import portfolioimg_1 from "../../Images/portfolioimg_1.png";
import portfolioimg_2 from "../../Images/portfolioimg_2.png";
import portfolioimg_3 from "../../Images/portfolioimg_3.png";
import portfolioimg_4 from "../../Images/portfolioimg_4.png";

const PortfolioComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="portfoliobg">
        <div className="portfolio_banner_container">
          <h5 className="portfolio_subtext">Our Case Studies</h5>
        </div>
      </div>
      <div className="portfolio_carosal_container">
        <Carousel responsive={responsive}>
          <div>
            <div>
              <img src={portfolioimg_1} alt="portfolioimg_1" />
            </div>
            <div className="portfolio_text_cont">
              
            </div>
          </div>
          <div>
            <div>
              <img src={portfolioimg_2} alt="portfolioimg_2" />
            </div>
            <div className="portfolio_text_cont">

            </div>
          </div>
          <div>
            <div>
              <img src={portfolioimg_3} alt="portfolioimg_3" />
            </div>
            <div className="portfolio_text_cont">

            </div>
          </div>
          <div>
            <div>
              <img src={portfolioimg_4} alt="portfolioimg_4" />
            </div>
            <div className="portfolio_text_cont">

            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PortfolioComponent;
