import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pagbox from "../components/Pagbox";
import Navigation from "../components/Navigation";
import LeftSideBox from "../components/LeftSideBox";
import Listbox from "../components/Listbox";
import style from "./Services.module.scss";
function Services() {
  return (
    <>
      <Header />
      <Navigation />
      <div className={style.container}>
        <h1>صفحه خدمات</h1>
      </div>
      <Footer />
    </>
  );
}

export default Services;
