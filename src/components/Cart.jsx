import React, { useContext, useEffect } from 'react';
import CartContext from '../context/CartContext';
import ItemContext from '../context/ItemContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { state } = useContext(CartContext);

  return (
    <div className="mt-12">
      <CartItems state={state} />
      <Checkout />
    </div>
  );
};

const CartItems = ({ state }) => {
  
  const {dispatch} = useContext(CartContext);
  const{addedMessage, setAddedMessage} = useContext(ItemContext)
  const handleDelete = (item)=>{
    dispatch({type:"DELETE_CART", payload:item});
    setAddedMessage((prev)=>({
        ...prev, [item.id]:false
    }))
  }
  return (
    <div className="flex flex-wrap gap-4 justify-center"> 
      {state.map((item) => (
        <div key={item.id} className="w-full max-w-sm rounded-md shadow-md overflow-hidden"> 
          <div className="flex flex-col items-center p-4">
            <img
              src={item.image}
              alt={item.category}
              className="w-32 h-32 object-contain rounded-full border-2 border-gray-200" 
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.title.substring(0, 20)}...</h3> 
              <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p> 
              <p className="text-xs text-gray-500">Rating: {item.rating.rate} ({item.rating.count} reviews)</p> 
              <p className="text-xs text-gray-700 mt-2 line-clamp-2">{item.description}</p> 
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-3 focus:outline-none focus:shadow-outline"
              onClick={()=>handleDelete(item)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

const Checkout = ()=>{
    const {topay, setTopay, state} = useContext(CartContext);
    
    const pay = state.reduce((acc, item) => acc + item.price, 0);
    const navigate = useNavigate()
    useEffect(() => {
      const timer = setTimeout(() => {
        if (pay === 0) {
          navigate('/home');
        }
      }, 2000); // optional delay
    
      return () => clearTimeout(timer); // cleanup
    }, [pay, navigate]);
    
  return(
    <div>
      {
        pay>0 ? <p>to pay: {pay}</p>:<p>No items added</p>
        
      }
    </div>
  )
}

export default Cart;