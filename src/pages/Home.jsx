import React from "react";
import FirstSlider from "../components/Sliders/FirstSlider";
import SideSectionLayout from "../layouts/SideSectionLayout";
import ContainerCategoryLayout from "../layouts/ContainerCategoryLayout";
import Post from "../components/CategoryPostContainer/Post";
import Banner from "../components/Banners/Banner";

function Home() {
  const data = [
    {
      id: 1,
      date: "August 26, 2013",
      title: "For Obama, MLK's shadow looms large ahead of speech",
      imageUrl: "src/images/slika1.png",
    },
    {
      id: 2,
      date: "August 15, 2013",
      title: "For Obama, MLK's shadow looms large ahead of speech",
      imageUrl: "src/images/slika2.jpg",
    },
    {
      id: 3,
      date: "August 26, 2013",
      title: "For Obama, MLK's shadow looms large ahead of speech",
      imageUrl: "src/images/slika1.png",
    },
    {
      id: 4,
      date: "August 15, 2013",
      title: "For Obama, MLK's shadow looms large ahead of speech",
      imageUrl: "src/images/slika2.jpg",
    },
  ];
  return (
    <>
      <FirstSlider />
      <SideSectionLayout>
        <ContainerCategoryLayout title="News" color="#3677B5" clasName="posts">
          {data.slice(0, 3).map((item) => (
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
          {data.slice(0, 3).map((item) => (
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
          {data.slice(0, 4).map((item) => (
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
      </SideSectionLayout>
    </>
  );
}

export default Home;
