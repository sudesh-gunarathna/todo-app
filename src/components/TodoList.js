import React from 'react'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import "./TodoList.css";
import{useState} from'react';

function TodoList() {

    const [todos, setTodos]=useState([]);

  return (
    <div className='todo-list-container'>
      <h2>My Todos</h2>

      <TodoInput todos={todos} setTodos={setTodos} />
   
      <div className='todo-items-wrapper'>
         {todos.map((item, index)=>{
            return(<TodoItem 
                indexv={index+1} 
                 key={item.id} 
                 todov={item} 
                 todos={todos} 
                 setTodos={setTodos} 
                 /> );
         })} 
      </div>
    </div>
  )
}

export default TodoList
