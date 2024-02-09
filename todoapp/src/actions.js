export function addTodo(todo){
    return{type:"ADD_todo", payload:todo}
}
export function editTodo(todo){
    return{type:"EDIT_todo", payload:todo}
}
export function deleteTodo(id){
    return{type:"DELETE_todo", payload:id}
}