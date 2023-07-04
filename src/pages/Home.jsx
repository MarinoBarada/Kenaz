import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import FirstSlider from "../components/firstSlider";

function Home() {
  return (
    <>
      <Header />
      <Categories />
      <div className="wrapper flex-column">
        <Banner />
        <FirstSlider />
      </div>
    </>
  );
}

export default Home;
