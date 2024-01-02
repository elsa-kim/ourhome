import React, { useContext } from "react";
import s from "./Item.module.css";
import { FaCartPlus } from "react-icons/fa";
import CartContext from "../../context/CartContext";

export default function Item({ image, title, detail, price, sale_price, sale_percent, temp, remark, count }) {
  const { cart, setCart } = useContext(CartContext);
  const handleAddCart = () => {
    alert("장바구니에 추가되었습니다.");
    let cartList = [...cart];

    cartList.map((item) => {
      if (item.title === title) item.count += 1;
      return;
    });
    if (!cartList.map((item) => item.title).includes(title)) {
      cartList.push({
        image: image,
        title: title,
        detail: detail,
        price: price,
        sale_price: sale_price,
        sale_percent: sale_percent,
        temp: temp,
        count: 1,
      });
    }

    setCart(cartList);
  };
  return (
    <div className={s.item}>
      <img src={image} className={s.image} />
      <div className={s.cart} onClick={handleAddCart}>
        <FaCartPlus className={s.cart_icon} />
      </div>
      {remark && (
        <p
          style={remark === "신제품" ? { backgroundColor: "#ff9c00" } : { backgroundColor: "#ff6064" }}
          className={s.remark}
        >
          {remark}
        </p>
      )}
      <h3 className={s.title}>{title}</h3>
      <p className={s.detail}>{detail}</p>
      {sale_price ? (
        <div className={s.price}>
          <p className={s.big_price}>
            <strong>{sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>원
          </p>
          <p className={s.small_price}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
          <p className={s.percent}>{sale_percent}</p>
        </div>
      ) : (
        <div className={s.price}>
          <p className={s.big_price}>
            <strong>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>원
          </p>
        </div>
      )}
      <h5 className={(temp === "냉장" && s.ice) || (temp === "냉동" && s.frozen) || s.temp}>{temp}</h5>
    </div>
  );
}
