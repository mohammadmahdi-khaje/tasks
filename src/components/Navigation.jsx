import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./Navigation.module.scss";
import Homepage from "../pages/Homepage";
import Aboutus from "../pages/Aboutus";

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <div className={style.navigation__icons__container}>
        <div className={style.navigation__icon}>
          <img src="/assets/images/icons8-home-50.png"></img>
        </div>
        <div className={style.navigation__icon}>
          <img src="/assets/images/icons8-about-us-50.png"></img>
        </div>
        <div className={style.navigation__icon}>
          <img src="/assets/images/icons8-services-50.png"></img>
        </div>
        <div className={style.navigation__icon}>
          <img src="/assets/images/icons8-contact-us-50.png"></img>
        </div>
      </div>
      <div className={style.menu}>
        <ul className={style.menu__container}>
          <li className={style.menu__item}>
            <a href="Homepage">خانه </a>
          </li>
          <li className={style.menu__item}>
            <a href="Aboutus">درباره ما </a>
          </li>
          <li className={style.menu__item}>
            <a href="Services"> خدمات </a>
          </li>
          <li className={style.menu__item}>
            <a href="Contactus"> ارتباط با ما</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
