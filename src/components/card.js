import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, desc, price, img } = item;
  return (
    <>
      
      <tr>
      <td className="image_box">
      <img src={img} alt="" />
      </td>
      
      <td className="title">{title}</td>
      <td  className="desc">{desc}</td>
     
        <td className=" price">₹ {price}</td>
        <td>In Stock</td>
        <td>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
        </td>
      </tr>
    </>
  );
};

export default Cards;

// id, title, autor, price, img
