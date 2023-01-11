import "./BannerComponent.css";
import { Link } from "react-router-dom";

const BannerComponent = () => {
  return (
    <div className="troo_banner_section">
        <div className="troo_banner_image">
          <div className="troo_banner_contant">
            <div className="troo_banner_contant_container">
              <h5 className="banner_subtext">Trusted Business Consultants</h5>
              <h1 className="banner_main_heading">WE’RE BUSINESS CONSULTING AGENCY</h1>
              <p className="banner_text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam inta nonumy eirmod tempor invidunt ut labore et.
              </p>
              <div className="Banner_btn_group">
              <Link>
                <button className="bannerBtn">
                  <p className="banner_btn_text">+ Consult With Us</p>
                </button>
              </Link>
              <Link>
                <button className="normal_btn">
                  <p className="banner_btn_text">Get Started +</p>
                </button>
              </Link>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default BannerComponent;
