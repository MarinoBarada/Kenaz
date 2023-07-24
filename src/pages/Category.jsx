import React, { useState, useRef } from "react";
import ArticleSlider from "../components/Sliders/ArticleSlider";
import SideSectionLayout from "../layouts/SideSectionLayout";
import Banner from "../components/Banners/Banner";
import { useLocation } from "react-router-dom";
import Articles from "../data/articles.json";
import Article from "../components/ArticleIntroduction/Article";

function Category() {
  const location = useLocation();
  const path = location.pathname;
  const categoryName = path.split("/")[1];
  const componentRef = useRef(null);

  const filteredArticles = Articles.filter(
    (article) => article.category === categoryName
  ).sort((a, b) => new Date(b.date) - new Date(a.date));

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredArticles.slice(startIndex, endIndex);

  const handlePageClick = (page) => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setCurrentPage(page);
  };

  return (
    <>
      <ArticleSlider />

      <SideSectionLayout>
        <div className="articles-wrapper" ref={componentRef}>
          <h1>{categoryName}</h1>
          <div className="articles">
            {currentData.map((item) => (
              <Article
                key={item.id}
                date={item.date}
                comments={item.comments}
                authorId={item.authorId}
                introduction={item.introduction}
                title={item.title}
                imageUrl={item.imageUrl}
                category={item.category}
                id={item.id}
                article={item}
              />
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  className={page === currentPage ? "active" : ""}
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </button>
              )
            )}
          </div>
        </div>
        <Banner />
      </SideSectionLayout>
    </>
  );
}

export default Category;
