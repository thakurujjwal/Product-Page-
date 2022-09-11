import React, { useState } from "react";

import list from "../data";
import Cards from "./card";
import "../styles/home.css";


const Home = ({ handleClick }) => {
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <>
      
      <div>
      <label> Filter By Product
      <select className="product_filter" >
        {list.map((option) => (
          <option value={option.title} >{option.title}</option>
        ))}
      </select>
        </label>
        Filter By Size
        <select className="product_filter">
        {list.map((option) => (
          <option value={option.id} >{option.id}</option>
        ))}
      </select>
        
      <input type="search"  className="product_search"  placeholder="Search here, Products..." required  onChange={(e) => setSearchTitle(e.target.value)}/> 
      </div>  

    <div className="table_card">
      
      <table className="table_product">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Stock</th>
          <th>SubTotal</th>
        </tr>
        {list.filter((item) => {
          if (searchTitle === "") {
            return item;
          } else if (
            item.title.toLowerCase().includes(searchTitle.toLowerCase())
          ) {
            return item;
          }
        }).map((item) => (
          <Cards
            className="kart"
            key={item.id}
            item={item}
            handleClick={handleClick}
          />
        ))}
      </table>
      </div>
      </>
  );
};

export default Home;
