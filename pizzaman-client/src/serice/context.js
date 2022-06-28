import  React,{useState } from "react";
const createTokenContext = React.createContext('');
function UserTokenContextProvider(props) {
    const [token,setToken] =useState('');
    return <createTokenContext.Provider value={{token:token,setToken:setToken}} >
        {props.children}
    </createTokenContext.Provider>    
}
export default UserTokenContextProvider;
export {createTokenContext};