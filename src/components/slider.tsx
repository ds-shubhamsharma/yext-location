
import * as React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

let OwlCarousel = require("react-owl-carousel");

const Slider=()=> {
  return (
    <div>
      <OwlCarousel
        loop={true}
        autoplay={1000}
        items={1}
        nav
        className="owl-theme"
      >
        <div className="item">
          <img
            src={"assets/images/sli.avif"} 
            alt="First slide"
            style={mystyle}
          />
        </div>
        <div className="item">
          <img
            src={"assets/images/banner2.jpg"}
            alt="Second slide"
            style={mystyle}
          />
        </div>
      </OwlCarousel>
      
    </div>
  );
}

export default Slider;

const mystyle = {
  width: "280px",
  margin: "auto",
};