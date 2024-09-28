import './TodoItem.css'

function TodoItem({ task, deleteTask, toggleCompleted }) {
    
    function handleChange() {
     toggleCompleted(task.id);
     }
     
     return (
     <div className="todo-item">
     <input 
     type="checkbox"
     checked={task.completed}
     onChange={handleChange}
     />
    <p className={task.completed?"deleted":""}>{task.text}</p>
     <button className="delete-btn" onClick={() => deleteTask(task.id)}>
     X
     </button>
     </div>
     );
    }
    export default TodoItem;