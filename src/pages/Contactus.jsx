import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "./Contactus.module.scss";
import LeftSideBox from "../components/LeftSideBox";
import Navigation from "../components/Navigation";

function Contactus() {
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

export default Contactus;
