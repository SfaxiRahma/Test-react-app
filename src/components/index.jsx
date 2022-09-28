import React, { useState }  from "react";
import Mem from "./memo";


function Index()
{

    // count here is called a state variable
    //and the setCount is the methoid capable of calling the statte varibale 
    console.log('Count rendered ')
    
    const [count, setCount]=  useState(0) // this is the first step

    return (
        <div>
          <Mem/>
          <button className="bg-red-300" onClick= {()=>setCount(count+1)}> count {count}</button> 
        </div>
    )

}

export default Index;
