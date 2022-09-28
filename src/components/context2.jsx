import React from "react"
import { useContext } from "react";
import { UserContext } from "./context";


const C2=() =>{

    const value=useContext(UserContext)

    return (

    <label> Hello {value}</label>

    )
} 


export default C2;


