 import React from "react"

 export const Greet =props =>  
 {
    return(
    <div>
        <h1>Hello {props.name} and age  {props.age}</h1> 
        {props.children}
    </div>
    
    )

 }

