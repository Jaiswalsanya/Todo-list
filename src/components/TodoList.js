import React from 'react'

function TodoList(props) {
  return (
    <div className='container_list'>
    <li className='list_item'>
        {props.items}
       <span className='icon'><i class="fa-solid fa-trash icon_delete" onClick={e=>{
        props.deleteItem(props.index)
       }}></i></span>
    </li>
    </div>
  )
}

export default TodoList