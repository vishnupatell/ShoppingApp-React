import React, { useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
import ItemContext from "../context/ItemContext";
const RenderItem = ({ allItems }) => {
  const { dispatch } = useContext(CartContext);
  const {addedMessage, setAddedMessage} = useContext(ItemContext);

  const handleAddItem = (item) =>{
    dispatch({ type: "ADD_CART", payload: item });
    setAddedMessage((prev)=>({
      ...prev, [item.id]:true
    }))    
    

    
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {allItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.category}
            className="w-full h-48 object-contain p-2"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Price: ${item.price.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mb-2">
              Rating: {item.rating.rate} ({item.rating.count})
            </p>
            <p className="text-sm text-gray-700 mb-3 line-clamp-3 h-16 overflow-hidden">
              {item.description}
            </p>
            <button
              className="bg-amber-400 hover:bg-green-500  font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              onClick={()=>handleAddItem(item)}
            >
              {addedMessage[item.id]?"Item added✅":"Add item"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderItem;