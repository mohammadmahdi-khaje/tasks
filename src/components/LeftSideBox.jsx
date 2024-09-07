import React from "react";
import style from "./LeftSideBox.module.scss";

function LeftSideBox() {
  return (
    <>
      <div className={style.container}>
        <fieldset className={style.container__fildset}>
          <legend>زبان برنامه نویسی مورد علاقه</legend>
          <select className={style.container__select}>
            <option>javascript</option>
            <option>next</option>
            <option>css</option>
            <option>html</option>
          </select>
        </fieldset>
      </div>
    </>
  );
}

export default LeftSideBox;
