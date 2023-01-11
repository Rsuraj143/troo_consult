import React from "react";
import "./VideoSection.css";
import S_animate from "../../Images/S_animate.png";
import { Link } from "react-router-dom";
import { FiPlay } from "react-icons/fi";

const VideoSection = () => {
  return (
    <div className="troo_video_section">
      <div className="troo_video_container">
        <div className="video_container_left">
          <h2 className="videoHeader">
            Let’s see exclusive video presentation about recent project
          </h2>
          <p className="viderPara">
            Lorem ipsum dolor sit abet, consetetur sadipscing elitr, sed diam
            inta nonumy eirmod tempor invidunt ut labore et.Lorem ipsum
          </p>
        </div>
        <div className="video_container_right">
          <div>
            <img src={S_animate} alt="S-animate" />
          </div>
            <Link className="play_btn" to="/">
              <FiPlay  />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
