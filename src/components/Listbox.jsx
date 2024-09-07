import React from "react";
import style from "./Listbox.module.scss";

function Listbox() {
  return (
    <div className={style.container}>
      <table className={style.table}>
        <tr>
          <th>اسم</th>
          <th>فامیل</th>
          <th>سن</th>
        </tr>
        <tr>
          <td>علی</td>
          <td>محمودی</td>
          <td>24</td>
        </tr>
      </table>
    </div>
  );
}

export default Listbox;
