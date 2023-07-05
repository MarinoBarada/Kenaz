import { Route, Routes } from "react-router-dom";
import Header from "./components/NavHeader/Header";
import Categories from "./components/NavHeader/Categories";
import Banner from "./components/Banners/Banner";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Categories />
      <div className="wrapper flex-column">
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
