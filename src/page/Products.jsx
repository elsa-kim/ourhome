import React from "react";
import useProducts from "../hooks/useProducts";
import Item from "../components/item/Item";
import s from "./Products.module.css";

export default function Products() {
  const [loading, products, error] = useProducts();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={s.items}>
      {products.map((item, idx) => (
        <div key={idx} className={s.item}>
          <div className={s.index}>{idx < 9 ? "0" + (idx + 1) : idx + 1}</div>
          <Item
            image={item.image}
            title={item.title}
            detail={item.detail}
            price={item.price}
            sale_price={item.sale_price}
            sale_percent={item.sale_percent}
            temp={item.temp}
            remark={item.remark}
            count={item.count}
          />
        </div>
      ))}
    </div>
  );
}
