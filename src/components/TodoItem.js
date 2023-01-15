import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react'
import './TodoItem.css';
import {useState} from 'react'
import ReactTooltip from 'react-tooltip';

function TodoItem({todov, indexv, todos, setTodos}) {

const [isEdit, setIsEdit] = useState(false)

const [editTodoName, setEditTodoName] = useState("")

const handleEdit = ()=>{

  setIsEdit(!isEdit)
  setEditTodoName(todov.name)

}


  const handleDelete=()=>{
    const newTodos = todos.filter((item)=>{
if (todov.id===item.id) {
  alert("you are going permantly delete ")
  return(false)
}
else{
  return(true)
}

    })
    //console.log(newTodos)
    setTodos(newTodos)
  }
  const handleSubmit= (e)=>{
   // console.log(e)
    if (e.keyCode===13){

    //  console.log("yes")

      const newTodos = todos.map((item)=>{
  
        if (todov.id===item.id) {
          return(
            {...item, name:editTodoName,}

          )
          
        }
        else{return item;}

      })
      setTodos(newTodos)
      setIsEdit(false)

    }
    
  }
const handleComplete =()=>{

  const newTodos = todos.map((item)=>{  
       return {...item}

   })
  setTodos(newTodos)



} 

  return (
    <div className='todo-item-wrapper'>
    
      <div className='todo-item-text'>
      <div>{indexv} </div>

       {isEdit? <input type='text' value={editTodoName} 
       onChange={(e)=>{setEditTodoName(e.target.value)}}
        onKeyDown={handleSubmit}/>:<div data-tip="Click to Complete the Task" onClick={handleComplete} style={{textDecorationLine: todov.isCompleted? 'line-through': 'none'}}>{todov.name}</div> }</div>
<ReactTooltip style={{color:"green"}}/>
      <div className='todo-item-button'>
        <button className='pencil-button' onClick={handleEdit}>
          <PencilIcon />
        </button>
        <button className='trash-button' onClick={handleDelete}>
          <TrashIcon/>
        </button>
      </div>
    </div>
  )
}

export default TodoItem
