import React from "react";
import Slider from "react-slick";
import FirstSliderCard from "./FirstSliderCard";
import Articles from "../../data/articles.json";

function firstSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="first-slider-wrapper">
      <Slider {...settings}>
        {Articles.sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 8)
          .map((item) => (
            <FirstSliderCard
              key={item.id}
              date={item.date}
              comments={item.comments}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          ))}
      </Slider>
    </div>
  );
}

export default firstSlider;
