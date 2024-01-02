import React, { useContext } from "react";
import s from "./CartTable.module.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import CartContext from "../../context/CartContext";

export default function CartTable({ item }) {
  const { cart, setCart } = useContext(CartContext);
  const handleMinus = () => {
    let cartList = [...cart];
    cartList.map((i) => {
      if (i.title === item.title) i.count -= 1;
      return;
    });
    setCart(cartList);
  };
  const handlePlus = () => {
    let cartList = [...cart];
    cartList.map((i) => {
      if (i.title === item.title) i.count += 1;
      return;
    });
    setCart(cartList);
  };
  return (
    <>
      <tr>
        <td>
          <img src={item.image} alt={`${item.title} 상품 이미지`} className={s.img} />
        </td>
        <td className={s.title}>{item.title}</td>
        {item.sale_price ? (
          <td>
            <div className={s.flex}>
              <span>{item.sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
              <span className={s.origin_price}>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
            </div>
          </td>
        ) : (
          <td className={s.normal_price}>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td>
        )}
        <td>
          <div className={s.count}>
            <FaMinus onClick={handleMinus} className={s.count_icon} />

            <p className={s.count_num}>{item.count}</p>
            <FaPlus onClick={handlePlus} className={s.count_icon} />
          </div>
        </td>
        <td className={s.total}>
          {(item.sale_price ? item.sale_price * item.count : item.price * item.count)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          원
        </td>
      </tr>
    </>
  );
}
