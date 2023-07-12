import React, { useState } from "react";
import Slider from "react-slick";
import SearchIcon from "../../assets/searc-big.png";
import Articles from "../../data/articles.json";

function SecondSlider() {
  const baseUrl = "http://localhost:5173";
  const [popupImage, setPopupImage] = useState(null);

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
    customPaging: function (i) {
      return (
        <a>
          <img src={`${baseUrl}/src/images/secondSlider/image${i + 1}.jpg`} />
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
      imageUrl: "src/images/secondSlider/image1.jpg",
    },
    {
      id: 2,
      title: "image2",
      imageUrl: "src/images/secondSlider/image2.jpg",
    },
    {
      id: 3,
      title: "image3",
      imageUrl: "src/images/secondSlider/image3.jpg",
    },
    {
      id: 4,
      title: "image4",
      imageUrl: "src/images/secondSlider/image4.jpg",
    },
    {
      id: 5,
      title: "image5",
      imageUrl: "src/images/secondSlider/image5.jpg",
    },
    {
      id: 6,
      title: "image6",
      imageUrl: "src/images/secondSlider/image6.jpg",
    },
    {
      id: 7,
      title: "image7",
      imageUrl: "src/images/secondSlider/image7.jpg",
    },
  ];

  return (
    <>
      <div className="second-slider-wrapper">
        <Slider {...settings}>
          {data.map((item) => (
            <div className="second-slider" key={item.id}>
              <img src={`${baseUrl}/${item.imageUrl}`} alt={item.title} />
              <div className="shadow"></div>
              <div className="zoom-picture" onClick={() => setPopupImage(item)}>
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
        <img src={`${baseUrl}/${popupImage?.imageUrl}`} alt={popupImage?.title} />
      </div>
    </>
  );
}

export default SecondSlider;
