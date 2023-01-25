import React from "react";
import { Link } from "react-router-dom";
import "./BlogComponent.css";

const BlogsComponent = () => {
  return (
    <div>
      <div className="blogs_container">
        <div className="blogs_header">
          <h5 className="subheading service_sub_heading">Our News and blogs</h5>
          <h2 className="section_header text-center">Featured tips and</h2>
          <h2 className="section_header text-center">
            tricks exclusively for you!
          </h2>
        </div>
        <div className="blogs_cards_container">
          <div className="blogs_card">
          <div class="blog_bg"></div>
            <div className="blogs_card_header">
              <p>By:Admin</p>
              <p>22 June, 2023</p>
            </div>
            <div className="blogs_card_title">
              <h3>8 Mistakes First-Time Founders Make When Starting a Business.</h3>
            </div>
            <div className="blogs_card_para">
              <p>
                Lorem Ipsum is simply dummy text of and printing and typesetting
                industry. Lorem
              </p>
            </div>
            <Link className="continue_reading"><p>Continue Reading &gt;&gt;</p></Link>
          </div>
          <div className="blogs_card">
          <div class="blog_bg"></div>
            <div className="blogs_card_header">
              <p>By:Admin</p>
              <p>22 June, 2023</p>
            </div>
            <div className="blogs_card_title">
              <h3>We provide advanced solution growin your online</h3>
            </div>
            <div className="blogs_card_para">
              <p>
                Lorem Ipsum is simply dummy text of and printing and typesetting
                industry. Lorem
              </p>
            </div>
            <Link className="continue_reading"><p>Continue Reading &gt;&gt;</p></Link>
          </div>
          <div className="blogs_card">
          <div class="blog_bg"></div>
            <div className="blogs_card_header">
              <p>By:Admin</p>
              <p>22 June, 2023</p>
            </div>
            <div className="blogs_card_title">
              <h3>Taking seamless key performance indicators offline</h3>
            </div>
            <div className="blogs_card_para">
              <p>
                Lorem Ipsum is simply dummy text of and printing and typesetting
                industry. Lorem
              </p>
            </div>
            <Link className="continue_reading"><p>Continue Reading &gt;&gt;</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsComponent;
