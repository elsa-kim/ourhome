import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import s from "./Cart.module.css";
import CartTable from "../components/cartTable/CartTable";
import { Link } from "react-router-dom";
import CartPrice from "../components/cartPrice/CartPrice";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const headers = [
    {
      text: "",
    },
    {
      text: "상품명",
    },
    {
      text: "구매가",
    },
    {
      text: "수량",
    },
    {
      text: "금액",
    },
  ];
  return (
    <>
      {cart.length >= 1 ? (
        <div>
          <table className={s.table}>
            <thead className={s.header}>
              <tr>
                {headers.map((header) => (
                  <th key={header.text} className={s.header_th}>
                    {header.text}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <CartTable item={item} key={index} />
              ))}
            </tbody>
          </table>
          <CartPrice />
        </div>
      ) : (
        <div className={s.empty}>
          <p className={s.empty_exp}>장바구니가 비었습니다.</p>
          <Link to="/">
            <button className={s.empty_btn}>상품 둘러보기</button>
          </Link>
        </div>
      )}
    </>
  );
}
