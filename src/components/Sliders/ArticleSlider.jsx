import React from "react";
import Slider from "react-slick";
import ArticleSliderCard from "./ArticleSliderCard";
import Articles from "../../data/articles.json";

function ArticleSlider() {
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
            <ArticleSliderCard
              key={item.id}
              date={item.date}
              comments={item.comments}
              title={item.title}
              imageUrl={item.imageUrl}
              category={item.category}
              id={item.id}
              article={item}
            />
          ))}
      </Slider>
    </div>
  );
}

export default ArticleSlider;
