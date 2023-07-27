import React, { useState, useEffect } from "react";
import ArticleSlider from "../components/Sliders/ArticleSlider";
import SideSectionLayout from "../layouts/SideSectionLayout";
import ContainerCategoryLayout from "../layouts/ContainerCategoryLayout";
import Post from "../components/CategoryPostContainer/Post";
import Banner from "../components/Banners/Banner";
import SmallSlidersLayout from "../layouts/SmallSlidersLayout";
import GallerySlider from "../components/Sliders/GallerySlider";
import Articles from "../data/articles.json";

function Home() {
  const [variableValue, setVariableValue] = useState(3);
  const [variableValue2, setVariableValue2] = useState(4);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    if (screenSize.width <= 940) {
      setVariableValue(2);
      setVariableValue2(2);
    } else {
      setVariableValue(3);
      setVariableValue2(4);
    }
    if (screenSize.width <= 650) {
      setVariableValue(3);
      setVariableValue2(2);
    }
    if (screenSize.width <= 500) {
      setVariableValue(2);
      setVariableValue2(2);
    }

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <>
      <ArticleSlider />

      <SideSectionLayout>
        <ContainerCategoryLayout title="News" color="#3677B5" clasName="posts">
          {Articles.filter((item) => item.category === "news")
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, variableValue)
            .map((item) => (
              <Post
                key={item.id}
                date={item.date}
                title={item.title}
                imageUrl={item.imageUrl}
                className={"post"}
                category={item.category}
                id={item.id}
                article={item}
              />
            ))}
        </ContainerCategoryLayout>

        <ContainerCategoryLayout title="Sport" color="#84C14F" clasName="posts">
          {Articles.filter((item) => item.category === "sport")
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, variableValue)
            .map((item) => (
              <Post
                key={item.id}
                date={item.date}
                title={item.title}
                imageUrl={item.imageUrl}
                className={"post"}
                category={item.category}
                id={item.id}
                article={item}
              />
            ))}
        </ContainerCategoryLayout>

        <Banner />

        <ContainerCategoryLayout
          title="Business"
          color="#EE6151"
          clasName="posts-2"
        >
          {Articles.filter((item) => item.category === "business")
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, variableValue2)
            .map((item) => (
              <Post
                key={item.id}
                date={item.date}
                title={item.title}
                imageUrl={item.imageUrl}
                className={"post-2"}
                category={item.category}
                id={item.id}
                article={item}
              />
            ))}
        </ContainerCategoryLayout>

        <Banner />

        <SmallSlidersLayout
          title="News Carousel"
          color="#FCC44D"
          clasName="posts-3"
          leftArrow="/src/assets/leftArrowYello.svg"
          rightArrow="/src/assets/rightArrowYello.svg"
          postNumber={2}
        >
          {Articles.filter((item) => item.category === "life")
            .slice(0, 10)
            .map((item) => (
              <Post
                key={item.id}
                date={item.date}
                title={item.title}
                imageUrl={item.imageUrl}
                className={"post-3"}
                category={item.category}
                id={item.id}
                article={item}
              />
            ))}
        </SmallSlidersLayout>

        <div className="two-small-sliders">
          <div className="small-slider">
            <SmallSlidersLayout
              title="Editorals"
              color="#A99765"
              clasName="posts-4"
              leftArrow="/src/assets/leftArrowBrown.svg"
              rightArrow="/src/assets/rightArrowBrown.svg"
              postNumber={1}
            >
              {Articles.filter((item) => item.category === "tech")
                .slice(0, 10)
                .map((item) => (
                  <Post
                    key={item.id}
                    date={item.date}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    className={"post-4"}
                    category={item.category}
                    id={item.id}
                    article={item}
                  />
                ))}
            </SmallSlidersLayout>
          </div>

          <div className="small-slider">
            <SmallSlidersLayout
              title="Local News"
              color="#A99765"
              clasName="posts-4"
              leftArrow="/src/assets/leftArrowBrown.svg"
              rightArrow="/src/assets/rightArrowBrown.svg"
              postNumber={1}
            >
              {Articles.filter((item) => item.category === "travel")
                .slice(0, 10)
                .map((item) => (
                  <Post
                    key={item.id}
                    date={item.date}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    className={"post-4"}
                    category={item.category}
                    id={item.id}
                    article={item}
                  />
                ))}
            </SmallSlidersLayout>
          </div>
        </div>
      </SideSectionLayout>

      <Banner />

      <GallerySlider />
    </>
  );
}

export default Home;
