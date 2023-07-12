import React from "react";
import FirstSlider from "../components/Sliders/FirstSlider";
import SideSectionLayout from "../layouts/SideSectionLayout";
import Banner from "../components/Banners/Banner";

function Category() {
  return (
    <>
      <FirstSlider />

      <SideSectionLayout>
        <Banner />
      </SideSectionLayout>
    </>
  );
}

export default Category;
