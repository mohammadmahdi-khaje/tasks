import React, { useState } from "react";
import style from "./Header.module.scss";
import Button from "./Button";
import { Link } from "react-router-dom";

function Header() {
  //----این کد برای باز شدن منو استفاده شده
  const [menuOpen, setMenuOpen] = useState(false);
  const handler = () => setMenuOpen((p) => !p);
  return (
    <>
      <div className={style.header}>
        <div className={style.header__content}>
          <div>
            <span className={style.logo}>
              <a className={style.logo__logoIcon} href="/">
                LOGO
              </a>
            </span>
          </div>
          <div>
            {/*منو*/}
            <nav
              className={`${style.nav} ${menuOpen ? style[`nav--open`] : {}}`}
            >
              <a className={style.nav__item} href="Homepage">
                خانه
              </a>

              <a className={style.nav__item} href="Aboutus">
                درباره ما
              </a>
              <a className={style.nav__item} href="Services">
                خدمات
              </a>
              <a className={style.nav__item} href="Contactus">
                ارتباط با ما
              </a>
              {/*دکمه رفتن به صفحه لاگ این*/}
              <div className={style.nav__button__container}>
                <Button className={style.button}>ورود / ساخت حساب </Button>
              </div>
            </nav>
          </div>
          <div style={{ flex: "0" }}>
            {/* login دکمه*/}
            <div className={style.header__button__container}>
              <Link to="/login" className={style.button}>
                ورود / ساخت حساب{" "}
              </Link>
            </div>
          </div>
          {/* دکمه باز شدن منو */}
          <div className={style.header__toggler}>
            <Button className={style.header__button__toggler} onClick={handler}>
              |||
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
