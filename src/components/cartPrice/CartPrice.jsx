import React, { useContext } from "react";
import s from "./CartPrice.module.css";
import { FaPlus } from "react-icons/fa6";
import { FaEquals } from "react-icons/fa6";
import CartContext from "../../context/CartContext";

export default function CartPrice() {
  const { cart, setCart } = useContext(CartContext);
  let total = 0;
  let priceArray = cart.map((item) => (item.sale_price ? item.sale_price * item.count : item.price * item.count));
  for (let i = 0; i < priceArray.length; i++) {
    total += priceArray[i];
  }
  return (
    <div className={s.total}>
      <p>
        총 금액{" "}
        <span className={s.point}>
          <strong>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>원
        </span>
      </p>
      <FaPlus className={s.icon} />
      <p>
        배송비{" "}
        <span className={s.point}>
          <strong>{total < 30000 ? "3,000" : 0}</strong>원
        </span>
        <span className={s.detail}>(3만원 이상 구매 시 무료배송)</span>
      </p>
      <FaEquals className={s.icon} />
      <p>
        결제 금액{" "}
        <span className={s.point}>
          <strong>{(total < 30000 ? total + 3000 : total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>원
        </span>
      </p>
    </div>
  );
}
