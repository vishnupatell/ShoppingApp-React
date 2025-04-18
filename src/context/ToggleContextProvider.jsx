import React, {useState} from "react";
import ToggleContext from "./ToggleContext";
const ToggleContextProvider = ({children})=>{
    const [theme, setTheme] =useState("")
    return(
        <ToggleContext.Provider value={{theme, setTheme}}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider;