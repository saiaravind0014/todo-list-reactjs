import { useSelector } from "react-redux"
import Todo from './Todo';
import './List.css';


function TodoList(){
    const todos = useSelector((state)=>state.todos);
    console.log(todos);
    return(
        <ul  className="list">
            {todos.slice().reverse().map(
                (todo)=>(
                    <Todo key={todo.id} id={todo.id} title={todo.title}/>
                )
            )}
        </ul>
    )
}
export default TodoList