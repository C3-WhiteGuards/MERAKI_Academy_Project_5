import React, { useEffect, useState } from "react";
import axios from "axios";

export const Allproduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((result) => {
      console.log(result.data);
      setProducts([...result.data.Products]);
    });
  }, []);

  return (
    <div>
      {products &&
        products.map((element, index) => {
          return (
            <div key={index}>
              <h1>{element.name}</h1>
              <h1>{element.price}</h1>
            </div>
          );
        })}
    </div>
  );
};



