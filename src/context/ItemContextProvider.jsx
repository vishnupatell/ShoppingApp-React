import React,{useState} from 'react'
import ItemContext from './ItemContext'

const ItemContextProvider = ({children}) => {
    const[allItems, setAllItems] = useState([]);
    const[addedMessage,setAddedMessage] = useState({});
    
  return (
    <ItemContext.Provider value={{allItems, setAllItems, addedMessage,setAddedMessage, }}>
        {children}
    </ItemContext.Provider>
  )
}

export default ItemContextProvider