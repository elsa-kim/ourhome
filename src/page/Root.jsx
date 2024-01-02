import React from "react";
import { Link } from "react-router-dom";
import s from "./Root.module.css";

export default function Root() {
  return (
    <div className={s.header}>
      <Link to="/">
        <img src="https://mall.ourhome.co.kr/res_new/images/logo_ourhome.png" alt="logo" />
      </Link>
      <div className={s.nav}>
        <Link to="/">
          <button className={s.btn}>상품</button>
        </Link>
        <Link to="/cart">
          <button className={s.btn}>장바구니</button>
        </Link>
      </div>
    </div>
  );
}
