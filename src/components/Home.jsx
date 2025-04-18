import React, { useState, useEffect, useContext } from "react";
import "./home.css";
import CartProvider from "../context/CartProvider";
import cartContext from "../context/CartContext";
import RenderItem from "./RenderItem";
import LoginContext from "../context/LoginContext";
import {useNavigate} from "react-router-dom" 
import ItemContext from "../context/ItemContext";

const Home = () => {
  const [items, setItems] = useState([]);
  const {login}  = useContext(LoginContext)
  const navigate = useNavigate();
  const {allItems, setAllItems} = useContext(ItemContext)
  useEffect(()=>{
    if(!login){
      setTimeout(()=>{
        navigate("/signup")
      },3000)
    }
  },[login])
  console.log(items)
  useEffect(() => {
    
    async function fetchData() {
      
       await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((item) => setAllItems(item));
      console.log(allItems);
    }
    fetchData()
  
  }, []);

  

  return (
    <div className="main-div-home">
      Find what you need...
      <RenderItem allItems={allItems} />
    </div>
  );
};


export default Home;
