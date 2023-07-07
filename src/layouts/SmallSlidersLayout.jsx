import React, { useRef } from "react";
import Slider from "react-slick";

function SmallSlidersLayout(props) {
  const style = {
    backgroundColor: props.color,
  };
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: props.postNumber,
    slidesToScroll: props.postNumber,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="container">
        <div className="color-line" style={style}></div>
        <div className="info-wrapper">
          <div className="title">
            <h2>{props.title}</h2>
            <div className="controls-small">
              <button className="left control" onClick={previous}>
                <img src={props.leftArrow} alt="left-arrow" />
              </button>
              <button className="right control" onClick={next}>
                <img src={props.rightArrow} alt="right-arrow" />
              </button>
            </div>
          </div>
          <div className={`${props.clasName} const`}>
            <Slider ref={sliderRef} {...settings}>
              {props.children}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmallSlidersLayout;
