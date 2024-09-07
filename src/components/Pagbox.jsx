import React, { useState } from "react";
import style from "./Pagebox.module.scss";
import Button from "./Button";

function Pagbox() {
  //---- این فانکشن برای عوض شدن صفحه ها استفاده شده
  const [tabSelected, setTabSelected] = useState(1);
  const tabSelect = (index) => {
    setTabSelected(index);
  };
  return (
    <div className={style.box}>
      <div className={style.box__button__container}>
        {/*این دکمه با استفاده از فانکشن بالا صفحه ها را عوض میکند*/}
        <Button
          className={
            tabSelected === 1
              ? style.box__button__toggler__active
              : style.box__button__toggler
          }
          onClick={() => tabSelect(1)}
        >
          ری اکت
        </Button>
        {/*این دکمه با استفاده از فانکشن بالا صفحه ها را عوض میکند*/}
        <Button
          className={
            tabSelected === 2
              ? style.box__button__toggler__active
              : style.box__button__toggler
          }
          onClick={() => tabSelect(2)}
        >
          جاوا اسکریپت
        </Button>
      </div>
      {/*بخش محتوا که بازدن دکمه های بالا محتوای ان عوض میشود*/}
      <div className={style.box__item__comtainer}>
        <div
          className={
            tabSelected === 1 ? style.box__item__active : style.box__item
          }
        >
          <h1 style={{ margin: "0 0 20px 0" }}>ری اکت</h1>

          <p>
            ری اکت (React) یک کتابخانه جاوا اسکریپتی برای ساخت رابط کاربری بوده
            که برای ایجاد برنامه‌های تحت وب با استفاده از کامپوننت‌ها، قابل
            استفاده است. از جمله ویژگی‌های برجسته React می‌توان به سادگی، قابلیت
            استفاده مجدد، امنیت، و سرعت اشاره کرد. React با استفاده از مدل
            مفهومی ویژه خود که به عنوان Virtual DOM شناخته می‌شود، امکان ایجاد
            برنامه‌های پویا و پاسخگو را فراهم می‌کند.
          </p>
        </div>
        {/*بخش محتوا که بازدن دکمه های بالا محتوای ان عوض میشود*/}
        <div
          className={
            tabSelected === 2 ? style.box__item__active : style.box__item
          }
        >
          <h1 style={{ margin: "0 0 20px 0" }}>جاوا اسکریپت</h1>

          <p>
            جاوا اسکریپت یک زبان برنامه نویسی است که توسعه دهندگان را قادر می
            سازد تا تعامل و عملکرد را به وب سایت ها اضافه کنند. این یک زبان
            برنامه نویسی سمت کلاینت است، به این معنی که مستقیماً در مرورگر کاربر
            اجرا می شود. جاوا اسکریپت با ایجاد صفحات وب پویا، مدیریت صحت فرم ها،
            دستکاری عناصر وب و موارد دیگر، نقش مهمی در بهبود تجربه کاربر ایفا می
            کند. این یک زبان همه کاره با قواعد دستوری ساده است که آن را برای
            مبتدیان قابل دسترس و به اندازه کافی برای برنامه های کاربردی وب
            پیشرفته قدرتمند می کند.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pagbox;
