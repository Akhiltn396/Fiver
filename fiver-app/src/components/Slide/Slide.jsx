import React from "react";
import "./Slider.scss";
import Slider from "infinite-react-carousel";

const Slide = ({children,slidesToShow,arrowsScroll	}) => {
  return (
    <div className="slide">
      <div className="container">
<Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} autoplay={true}>
{children}
  </Slider>
  </div>
    </div>
  );
};

export default Slide;