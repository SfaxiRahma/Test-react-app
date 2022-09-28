import React from "react"
import C2 from './context2' 


export const UserContext= React.createContext();  // you need always to create the context and export it 


const C1=() =>{


    return(
        <UserContext.Provider value={'Rahma'}>
        <C2/>       
        </UserContext.Provider>
)
} 

export default C1;


