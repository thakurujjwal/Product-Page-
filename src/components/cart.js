import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>

      <article>
        <table className="cart_header">
          <tr className="cartHeading">
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>SubTotal</th>
            <th>Remove Item</th>
          </tr>
          {cart.map((item) => (
            <tr className="cart_box" key={item.id}>
              <td >
                <img src={item.img} alt="" />
              </td>
              <td className="cart_title">
                {item.title} <br />
                <span className="desc">{item.desc}</span>
              </td>
              <td className="cartprice">{item.price}</td>
              <td>
                <button onClick={() => handleChange(item, 1)}>+</button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, -1)}>-</button>
              </td>
             
                <td className="cartprice">{item.price*item.amount}</td>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
             
            </tr>
          ))}
          
        </table>
        <div className="total">
          <span className="totalheading">Cart Total</span>
          <div className="totalnav">
            <div>Subtotal </div>
            <div> Rs - {price}</div>
          </div>
          <div className="totalnav">
            <div>Total </div>
            <div> Rs - {price}</div>
          </div>
         
          <button className="total_button" >PROCEED TO CHECKOUT </button>
 
        
        </div>
      </article>
    </>

  );
};

export default Cart;
