import React, { useState } from "react";
import style from "./Login.module.scss";
import Button from "../components/Button";
function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.container__box}>
          {/*فرم لاگ این*/}
          {showLogin && (
            <div className={style.login}>
              <div className={style.login__textbox__container}>
                <input
                  className={style.login__textbox}
                  type="text"
                  placeholder="ایمیل"
                ></input>
                <input
                  className={style.login__textbox}
                  type="text"
                  placeholder="رمز عبور"
                ></input>
                <div className={style.login__checkbox__container}>
                  <input
                    className={style.login__checkbox}
                    type="checkbox"
                  ></input>
                  <p>من را به خاطر بسپار</p>
                </div>
              </div>
            </div>
          )}
          {/*فرم ثبت نام*/}
          {showRegister && (
            <div className={style.register}>
              <div className={style.register__textbox__container}>
                <input
                  className={style.register__textbox}
                  type="text"
                  placeholder="ایمیل"
                ></input>
                <input
                  className={style.register__textbox}
                  type="text"
                  placeholder="رمز عبور"
                ></input>
                <input
                  className={style.register__textbox}
                  type="text"
                  placeholder="تکرار رمز عبور "
                ></input>
                <div className={style.register__checkbox__container}>
                  <input
                    className={style.register__checkbox}
                    type="checkbox"
                  ></input>

                  <p>قوانین را مطالعه کردم</p>
                </div>
              </div>
            </div>
          )}{" "}
          <div className={style.login__button__container}>
            <Button onClick={handleLoginClick}>ورود</Button>
            <Button onClick={handleRegisterClick}>ساسخت حساب</Button>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Login;
