import React, { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch("data/itemList.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => setError("에러 발생!"))
      .finally(() => setLoading(false));
  }, []);

  return [loading, products, error];
}
