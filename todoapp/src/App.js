import { useDispatch} from 'react-redux';
import './App.css';
import {addTodo} from "../src/actions";
import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const dispatch = useDispatch();
  const [todoTitle,setTodoTitle] = useState("")
  const handleTodo =()=>{
    if(todoTitle.trim()){
      const newTodo= {
        title:todoTitle
      }
      dispatch(addTodo(newTodo))
      setTodoTitle("");
    }
  }
  return (
    <div className='same'>
      <div className="two">
        <header>TODO APP</header>
        <div className='input-container'>
          <input type='text' className='form-control' value={todoTitle} 
          onChange={(e)=>setTodoTitle(e.target.value)}></input>
          <button className=' btn btn-primary' onClick={() => handleTodo()}>ADD</button>
        </div>
        <TodoList/>
      </div>
    </div>
    
  );
}

export default App;
