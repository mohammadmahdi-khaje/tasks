import React from "react";
import style from "./Homepage.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pagbox from "../components/Pagbox";
import Navigation from "../components/Navigation";
import LeftSideBox from "../components/LeftSideBox";
import Listbox from "../components/Listbox";

function Homepage() {
  return (
    <>
      <Header />
      <Navigation />
      <div className={style.container}>
        <h1>صفحه خانه</h1>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
