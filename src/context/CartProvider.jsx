import React, {useReducer, useState} from "react";
import CartContext from "./CartContext";
import toast from 'react-hot-toast';

const CartProvider = ({children})=>{
    const initialState = [];
    const reducer = (state, action) => {
        switch(action.type){
            case "ADD_CART":
                let alreadyPresent =  state.some((item) => item.id === action.payload.id)
                if(alreadyPresent){
                    toast.error("Item already in the cart");
                    return state;
                }
              return [
                    ...state, action.payload
                ]
            case "DELETE_CART" :
                return state.filter((state)=>state.id!==action.payload.id)
                  
            default: return state 
        }
    }
    

    const[state, dispatch] = useReducer(reducer, initialState);
    // console.log(state);
    const [topay, setTopay] = useState(0);
return(
    <CartContext.Provider value={{state, dispatch, topay, setTopay}}>
        {children}
    </CartContext.Provider>
)
}

export default CartProvider;