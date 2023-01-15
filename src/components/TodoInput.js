import React from 'react'
import './TodoInput.css';
import {PlusIcon} from  '@heroicons/react/outline';
import {useState} from 'react'
import { v4 } from 'uuid';

function TodoInput({todos, setTodos}) {

   const [todo, setTodo] = useState(""); 

const handleClick =()=>{
//id, name, isCompleated" add as array object
if(todo.length>0){
const newTodo ={ id: v4(),
     name:todo, 
     isCompleated : false
    };
const newTodos = [...todos, newTodo]

setTodos(newTodos)
setTodo("")
}
}
  return (
    <div className='todo-input-wrapper'>
      <input type='text' value={todo} onChange={(event)=>{setTodo(event.target.value);}}
      placeholder='Please Enter Your Todo...'
      />
      <button onClick={handleClick}>
      <PlusIcon className='plus-icon'  />
      </button>
     
    </div>
  )
}

export default TodoInput
