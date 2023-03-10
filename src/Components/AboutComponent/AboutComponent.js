import "./AboutComponent.css";
import aboutImg from "../../Images/aboutImg.png";
import about_para_icon from "../../Images/about_para_icon.svg";

const AboutComponent = () => {
  return (
    <div className="troo_aboutsection" id="about">
      <div className="troo_aboutcontainer">
        <div className="troo_aboutcont_left">
          <img src={aboutImg} alt="aboutImg" className="aboutimg" />
        </div>
        <div className="troo_aboutcont_right">
          <h5 className="subheading"> Get to Know Us</h5>
          <h2 className="section_header">
            We are committed to providing our customers with exceptional.
          </h2>
          <p className="about_para left_line">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            inta nonumy eirmod tempor invidunt ut labore et.Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam.
          </p>
          <div className="about_cont_devider">
            <div>
              <h4 >The Best Services <span className="about_subheading_line"></span></h4>
              <p>
                There are many variations passages Lorem Ipsum available, but we
                are the majority have suffered alteration.
              </p>
            </div>
            <div>
              <h4 >Expert Team Member <span className="about_subheading_line"></span></h4>
              <p>
                There are many variations passages Lorem Ipsum available, but we
                are the majority have suffered alteration.
              </p>
            </div>
          </div>
          <div className="about_heighlight_cont">
            <div className="about_heighlight">
              <div><img src={about_para_icon} alt="about_para_icon" className="width7" /></div>
              <p>Emergency response time is one hour or less guaranteed.</p>
            </div>
            <div className="about_heighlight">
            <div><img src={about_para_icon} alt="about_para_icon" className="width7" /></div>
              <p>Until the eleifend elit is a lot of great facilities.</p>
            </div>
            <div className="about_heighlight">
            <div><img src={about_para_icon} alt="about_para_icon" className="width7" /></div>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
            <div className="about_heighlight">
            <div><img src={about_para_icon} alt="about_para_icon" className="width7" /></div>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
          </div>
          <button className="normal_btn">
            <p className="banner_btn_text">Learn More +</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
