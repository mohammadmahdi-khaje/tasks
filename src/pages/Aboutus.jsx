import React from "react";
import style from "./Aboutus.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeftSideBox from "../components/LeftSideBox";
import Navigation from "../components/Navigation";

function Aboutus() {
  return (
    <>
      <Header />
      <Navigation />

      <div className={style.container}>
        <h1>صفحه درباره ما</h1>
      </div>

      <Footer />
    </>
  );
}

export default Aboutus;
