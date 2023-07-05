import React from "react";
import Slider from "react-slick";
import FirstSliderCard from "./FirstSliderCard";

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

  const data = [
    {
      id: 1,
      date: "August 26, 2013",
      comments: 22,
      title: "'Margot' breathlessly reimagines Anne Frank's sister",
      imageUrl: "src/images/slika1.png",
    },
    {
      id: 2,
      date: "August 15, 2013",
      comments: 5,
      title: "'Margot' Reimagines the Enigmatic Sister of Anne Frank",
      imageUrl: "src/images/slika2.jpg",
    },
  ];

  return (
    <div className="first-slider-wrapper">
      <Slider {...settings}>
        {data.map((item) => (
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
