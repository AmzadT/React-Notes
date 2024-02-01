// Your Task is to create an application which will get all the products from https://dummyjson.com/products , and display those same product image ( first image available on images array ), title, description, price


import { useState,useEffect } from "react";
import "./App.css";

function App() {

  const [arr,setArr] = useState([]);
  
  return (
    <>
    <button>GET ALL Products</button>
      <div className="products-container"></div>
    </>
  );
}

export default App;


