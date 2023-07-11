import React from "react";
import FirstSlider from "../components/Sliders/FirstSlider";
import SideSectionLayout from "../layouts/SideSectionLayout";
import ContainerCategoryLayout from "../layouts/ContainerCategoryLayout";
import Post from "../components/CategoryPostContainer/Post";
import Banner from "../components/Banners/Banner";
import SmallSlidersLayout from "../layouts/SmallSlidersLayout";
import SecondSlider from "../components/Sliders/SecondSlider";
import Articles from "../data/articles.json";

function Home() {
  return (
    <>
      <FirstSlider />

      <SideSectionLayout>
        <ContainerCategoryLayout title="News" color="#3677B5" clasName="posts">
          {Articles.filter((item) => item.category === "news")
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3)
            .map((item) => (
              <Post
                key={item.id}
                date={item.date}
                title={item.title}
                imageUrl={item.imageUrl}
                className={"post"}
              />
            ))}
        </ContainerCategoryLayout>

        <ContainerCategoryLayout title="Sport" color="#84C14F" clasName="posts">
          {Articles.filter((item) => item.category === "sport")
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3)
            .map((item) => (
              <Post
                key={item.id}
                date={item.date}
                title={item.title}
                imageUrl={item.imageUrl}
                className={"post"}
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
            .slice(0, 4)
            .map((item) => (
              <Post
                key={item.id}
                date={item.date}
                title={item.title}
                imageUrl={item.imageUrl}
                className={"post-2"}
              />
            ))}
        </ContainerCategoryLayout>

        <Banner />

        <SmallSlidersLayout
          title="News Carousel"
          color="#FCC44D"
          clasName="posts-3"
          leftArrow="src/assets/leftArrowYello.svg"
          rightArrow="src/assets/rightArrowYello.svg"
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
              />
            ))}
        </SmallSlidersLayout>

        <div className="two-small-sliders">
          <div className="small-slider">
            <SmallSlidersLayout
              title="Editorals"
              color="#A99765"
              clasName="posts-4"
              leftArrow="src/assets/leftArrowBrown.svg"
              rightArrow="src/assets/rightArrowBrown.svg"
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
                  />
                ))}
            </SmallSlidersLayout>
          </div>

          <div className="small-slider">
            <SmallSlidersLayout
              title="Local News"
              color="#A99765"
              clasName="posts-4"
              leftArrow="src/assets/leftArrowBrown.svg"
              rightArrow="src/assets/rightArrowBrown.svg"
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
                  />
                ))}
            </SmallSlidersLayout>
          </div>
        </div>
      </SideSectionLayout>

      <Banner />

      <SecondSlider />
    </>
  );
}

export default Home;
