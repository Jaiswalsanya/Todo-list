import TodoInput from './components/TodoInput';
import './App.css';
import TodoList from './components/TodoList';
import { useState } from 'react';


function App() {
  const[todoList,setTodoList]=useState([ ]);
  let addList= (InputText)=>{
    if(InputText!=='')
    setTodoList([...todoList,InputText])
  }
  const deleteList=(key)=>{
     let newListTodo = [...todoList];
     newListTodo.splice(key,1);
     setTodoList([...newListTodo]);
  }
  return (
    <div className='container'>
      <div className='center_container'>
    <TodoInput addList={addList}/>
    {todoList.map((listItem,i)=>{
     return(
      <TodoList key={i} index={i} items={listItem} deleteItem={deleteList}/>
     )
    })
  }
    </div>
    </div>
  );
}

export default App;
