import React, { useState } from 'react'

function TodoInput(props) {
    const[InputText,setInputText]=useState('');
  return (
  
   
        <>
            <input type='text' placeholder='Add Items'value={InputText} onChange={e=>{setInputText(e.target.value)}}></input>
            <button type='button' className='input_button' onClick={()=>{
                props.addList(InputText)
                setInputText("")
            }}>+</button>
            <div>{InputText}</div>
      </>
   
  )
}

export default TodoInput