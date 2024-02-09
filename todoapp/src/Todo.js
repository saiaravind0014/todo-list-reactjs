import { useState } from "react"
import { editTodo,deleteTodo } from "./actions";
import { useDispatch } from "react-redux";
import './Todo.css';
function Todo({id, title}){
     const[edit,setEdit]=useState(false);
     const[newTitle,setNewTitle]=useState(title)
     const dispatch = useDispatch()
     const handleTodo=()=>{
        if(newTitle.trim()){
            dispatch(editTodo({ id: id, title: newTitle }));
            setEdit(false);
        }
     } 
     const handleDelete = ()=>{
        dispatch(deleteTodo(id))
     }
    return(

        <div className="list-item-container">
            {edit?(
                <div className="save-list">
                    <input className="form-control" type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}></input>
                    <button className="btn btn-secondary" onClick={handleTodo}>Save</button>
                </div>
            ):(
                <div>
                    <li className="list-items">
                        <p>{title}</p>
                        <div className="actions">
                            <button className="btn btn-warning" onClick={()=>setEdit(true)}>Edit</button>
                            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </div>
                    </li>
                </div>
                
            )}
        </div>
    )
}
export default Todo