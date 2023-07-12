import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/NavHeader/Header";
import Categories from "./components/NavHeader/Categories";
import Banner from "./components/Banners/Banner";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import SingleArticle from "./pages/SingleArticle";

function App() {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, [location]);

  const validCategories = [
    "news",
    "business",
    "sport",
    "life",
    "tech",
    "travel",
  ];

  return (
    <>
      <Header />
      <Categories />
      <div className="wrapper flex-column">
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          {validCategories.map((categoryName) => (
            <Route
              key={categoryName}
              path={`/${categoryName}`}
              element={<Category />}
            />
          ))}
          <Route path="/:categoryName/:articleId" element={<SingleArticle />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
