import React, {useState, useContext, useRef} from "react";
import LoginContext from "./LoginContext";

const LoginContextProvider = ({children})=>{
    const [login, setLogin] = useState(false);
    const [name, setName] = useState("");
    const hasShownAlert = useRef(false);
    const [loginDetails, setLoginDetails] = useState({});
return <LoginContext.Provider value={{login, setLogin, loginDetails, setLoginDetails, name, setName, hasShownAlert  }}>
        {children}
    </LoginContext.Provider>
}

export default LoginContextProvider;
