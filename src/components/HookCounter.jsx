import React, { useState }  from "react";


function HookCounter()
{

    // count here is called a state variable
    //and the setCount is the methoid capable of calling the statte varibale 
    
    const [count, setCount]=  useState(0) // what this state is going to sdo

    return (
        <div>
          <button onClick= {()=>setCount(count+1)}> count {count}</button>
        </div>
    )

}

export default HookCounter;
