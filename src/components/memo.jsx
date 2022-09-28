import React, { useState }  from "react";
import { memo } from "react";


function Mem()
{

    // count here is called a state variable
    //and the setCount is the methoid capable of calling the statte varibale 
    
    console.log('name Rendered')

    const [name, setName]=useState('Rahma')

    return (
        <div>
          <button className="bg-red-300" onClick= {()=>setName('upadted')}> name {name}</button>
        </div>
    )

}

export default memo(Mem);