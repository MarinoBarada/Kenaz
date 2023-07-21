import React from "react";
import { useLocation } from "react-router-dom";
import SideSectionLayout from "../layouts/SideSectionLayout";
import Banner from "../components/Banners/Banner";
import Author from "../data/authors.json";
import AboutAuthor from "../components/ArticlePage/AboutAuthor";
import Content from "../components/ArticlePage/Content";
import Comments from "../components/ArticlePage/Comments";

function SingleArticle() {
  const loction = useLocation();
  const article = loction.state?.data;
  const content = article.content;
  const comments = article.comments;
  const author = Author.find((author) => author.id === article.authorId);
  const articleID = article.id;

  return (
    <>
      <div className="main-image">
        <img src={article.imageUrl} alt="image" />
        <div className="info">
          <p>{article.date}</p>
          <h1>{article.title}</h1>
        </div>
      </div>

      <SideSectionLayout>
        <Content content={content} />

        <Banner />

        <AboutAuthor author={author} />

        <Comments comments={comments}  articleID={articleID}/>
      </SideSectionLayout>
    </>
  );
}

export default SingleArticle;
