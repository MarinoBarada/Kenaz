import React, { useState } from "react";
import Slider from "react-slick";
import SearchIcon from "../../assets/searc-big.png";

function SecondSlider() {
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
          <img src={`src/images/secondSlider/slika${i + 1}.jpg`} />
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
      title: "Slika1",
      imageUrl: "src/images/secondSlider/slika1.jpg",
    },
    {
      id: 2,
      title: "slika2",
      imageUrl: "src/images/secondSlider/slika2.jpg",
    },
    {
      id: 3,
      title: "slika3",
      imageUrl: "src/images/secondSlider/slika3.jpg",
    },
    {
      id: 4,
      title: "slika4",
      imageUrl: "src/images/secondSlider/slika4.jpg",
    },
    {
      id: 5,
      title: "slika5",
      imageUrl: "src/images/secondSlider/slika5.jpg",
    },
    {
      id: 6,
      title: "slika6",
      imageUrl: "src/images/secondSlider/slika6.jpg",
    },
    {
      id: 7,
      title: "slika7",
      imageUrl: "src/images/secondSlider/slika7.jpg",
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
        <img src={popupImage?.imageUrl} alt={popupImage?.title} />
      </div>
    </>
  );
}

export default SecondSlider;
