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

export const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const addProduct = () => {
    axios.post("http://localhost:5000/products", {
      name,
      price,
      description,
      image,
    }).then(result=>{
        console.log(result);
    })
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>

      <input
        type="number"
        placeholder="price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>

      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>

      <input
        type="text"
        placeholder="Image Link"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      ></input>

      <button onClick={addProduct}>add</button>
    </div>
  );
};
