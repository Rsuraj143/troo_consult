import React from "react";
import "./Highlight.css";
import highlightImg from "../../Images/highlightImg.png";

const Highlight = () => {
  return (
    <div className="highlight_section">
      <div className="highlight_container">
        <div className="highlight_left">
          <h5 className="subheading">People Why Choose US</h5>
          <h2>
            Experience you can trust, Service quality you can easily count on
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting’s
            the industrey's standard dummy text ever since the 1500 when printed
            galley of type.
          </p>
          <img src={highlightImg} alt="highlightImg" />
        </div>
        <div className="highlight_right">
          <div className="highlight_text_lists">
            <div><h3 className="highlight_num">01</h3></div>
            <div>
              <h3 className="highlight_heading">Strategy and Innovation</h3>
              <p className="highlight_para">
                Lorem Ipsum is simply dummy rummy text of the printing and
                typesetting’s the industrey's standard dummy text ever since the
                1500 when printed galley of type.
              </p>
            </div>
          </div>
          <div className="highlight_text_lists">
            <div><h3 className="highlight_num">02</h3></div>
            <div>
              <h3 className="highlight_heading">Strategy and Innovation</h3>
              <p className="highlight_para">
                Lorem Ipsum is simply dummy rummy text of the printing and
                typesetting’s the industrey's standard dummy text ever since the
                1500 when printed galley of type.
              </p>
            </div>
          </div>
          <div className="highlight_text_lists">
            <div><h3 className="highlight_num">03</h3></div>
            <div>
              <h3 className="highlight_heading">Strategy and Innovation</h3>
              <p className="highlight_para">
                Lorem Ipsum is simply dummy rummy text of the printing and
                typesetting’s the industrey's standard dummy text ever since the
                1500 when printed galley of type.
              </p>
            </div>
          </div>
          <div className="highlight_text_lists">
            <div><h3 className="highlight_num">04</h3></div>
            <div>
              <h3 className="highlight_heading">Strategy and Innovation</h3>
              <p className="highlight_para">
                Lorem Ipsum is simply dummy rummy text of the printing and
                typesetting’s the industrey's standard dummy text ever since the
                1500 when printed galley of type.
              </p>
            </div>
          </div>
          <div className="highlight_text_lists">
            <div><h3 className="highlight_num">05</h3></div>
            <div>
              <h3 className="highlight_heading">Strategy and Innovation</h3>
              <p className="highlight_para">
                Lorem Ipsum is simply dummy rummy text of the printing and
                typesetting’s the industrey's standard dummy text ever since the
                1500 when printed galley of type.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
