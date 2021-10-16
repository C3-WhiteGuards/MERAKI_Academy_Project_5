import React, { useEffect, useState } from "react";
import axios from "axios";
import {Col,Card,Row,Button} from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../../redux/action/cart";
export const Allproduct = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.cart.cart;
  }); 
  const all = JSON.parse(localStorage.getItem("savedData"))
   useEffect(() => {
    axios.get("http://localhost:5000/products").then((result) => {
      setProducts([...result.data.Products]);
    });
  }, []);

  return (
    <div className="container">
      <h3 className="center">Our items</h3>
     
    
      <Row xs={1} md={3} className="g-4">
      {products &&
        products.map((item, index) => {
          return (
              <Col key={item.id}>
                <Card>
                  <Card.Img variant="top" src={item.image}  height="350px"
                  width="350px" />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                    <Card.Text>
                     Prics:{item.price}$
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{
                      dispatch(addToCart(item))
                      all.push(item)
                      localStorage.setItem("savedData", JSON.stringify(all));
                    }}>add Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            
          
          );
        })}
        </Row>
   
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
