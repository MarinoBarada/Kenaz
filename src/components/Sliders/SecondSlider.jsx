import React, { useState } from "react";
import Slider from "react-slick";
import SearchIcon from "../../assets/searc-big.png";

function SecondSlider() {
  const [popupImage, setPopupImage] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  const handleAnimationEnd = () => {
    setIsVisible(true);
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={() => {
          onClick();
          handleButtonClick();
        }}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={() => {
          onClick();
          handleButtonClick();
        }}
      />
    );
  }

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={`/src/assets/secondSlider/image${i + 1}.jpg`}
            onClick={() => {
              handleButtonClick();
            }}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
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
      title: "image1",
      imageUrl: "/src/assets/secondSlider/image1.jpg",
    },
    {
      id: 2,
      title: "image2",
      imageUrl: "/src/assets/secondSlider/image2.jpg",
    },
    {
      id: 3,
      title: "image3",
      imageUrl: "/src/assets/secondSlider/image3.jpg",
    },
    {
      id: 4,
      title: "image4",
      imageUrl: "/src/assets/secondSlider/image4.jpg",
    },
    {
      id: 5,
      title: "image5",
      imageUrl: "/src/assets/secondSlider/image5.jpg",
    },
    {
      id: 6,
      title: "image6",
      imageUrl: "/src/assets/secondSlider/image6.jpg",
    },
    {
      id: 7,
      title: "image7",
      imageUrl: "/src/assets/secondSlider/image7.jpg",
    },
  ];

  return (
    <>
      <div className="second-slider-wrapper">
        <Slider {...settings}>
          {data.map((item) => (
            <div className="second-slider" key={item.id}>
              <img src={item.imageUrl} alt={item.title} />
              <div className="shadow"></div>
              <div
                className={`zoom-picture ${isVisible ? "fade-in" : "fade-out"}`}
                onClick={() => setPopupImage(item)}
                onAnimationEnd={handleAnimationEnd}
              >
                <img src={SearchIcon} alt="search-icon" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div
        className="popup-image"
        style={{ display: popupImage ? "block" : "none" }}
      >
        <span onClick={() => setPopupImage(null)}>&times;</span>
        <img src={popupImage?.imageUrl} alt={popupImage?.title} />
      </div>
    </>
  );
}

export default SecondSlider;
