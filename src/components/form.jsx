import React, { useState } from "react"


const Form= ()=>
{
    const [formData, setFormData]= useState({

        text:'default',
        list:'option1'
    })

   const handleSubmit=(e)=>
    {
        alert( 'text '+ formData.text+' list '+formData.list);
        e.preventDefault()
    
    }

    return(
    <div>
        <form onSubmit={handleSubmit}>
        <label> Input field </label>
        <input type = 'text' value = {formData.text} onChange={(e)=>setFormData({...formData, text:e.target.value})}></input>
        <p> entred value is {formData.text}</p>
        <label>  list  </label>
        <select value = {formData.list} onChange={(e)=> setFormData({...formData, list:e.target.value})}>
        <option> option1</option>
        <option>option2</option>
        <option>option3</option>
        </select>
        <label> user selected {formData.list}</label>
        <button  type ='submit'>submit </button>
        </form>
    </div>)
}

export default Form;

// so basically to update an imput filed you use the hook to update and actual state value
// use the  event and e.target.value to capture the user input 