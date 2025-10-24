import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    //initialized with empty or sampleTask
    //  {/* every todo must have 2 things i.e.  task and its unique id for this we will make array of objects */}

    let [todos,setTodos]=useState([{task:"Sample Task",id:uuidv4(),isDone:false}]);
    //shuruaat me naye task ki value is empty
    let [newTodo,setNewTodo]=useState("");
    //input ke andr kuch bhi change hoga that will change our newTodo
    //todos ki value tab update hogi jab humne input ke andr kkuch add krdiya and then add button pe click krdiya
    //function to add
    let addNewTodo=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]});
        setNewTodo("");
    };
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }
    //we are using prevTodos concept as its value is depending on the previous values
    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!=id));
    };

    let upperCaseAll=()=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            };
    }));
    };

    let markAllDone=()=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{
            return{
                ...todo,
                isDone:true,
            };
    }));
    };

    let upperCaseOne=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id==id){
                    return{
                        ...todo,
                        task:todo.task.toUpperCase(),
                    };
                }else{
                    return todo;
                }
            }));
    };
    let markAsDone=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id==id){
                    return{
                        ...todo,
                        isDone:true,
                    };
                }else{
                    return todo;
                }
            }));
    };

    
    return(
        <div className="todo-app">
            <h1>Awesome Todo List 📝</h1>

            <div className="input-container">
                <input 
                    placeholder="Add a new task..." 
                    value={newTodo} 
                    onChange={updateTodoValue}
                    className="new-todo-input"
                />
                <button onClick={addNewTodo} className="add-task-btn">Add Task</button>
            </div>

            <hr className="divider"></hr>
            
            <h4> Tasks Todo </h4>

            <ul className="todo-list">
                {
                    todos.map((todo)=>{
                        // Use CSS class 'done' for styling the completed task
                        const todoClass = todo.isDone ? 'done' : '';
                        return(
                            <li key={todo.id} className={`todo-item ${todoClass}`}>
                                {/* Removed inline style, using className for styling */}
                                <span className="todo-task">{todo.task}</span>
                                
                                <div className="item-actions">
                                    <button 
                                        onClick={()=>markAsDone(todo.id)} 
                                        className="action-btn mark-done-btn"
                                        disabled={todo.isDone} // Functionality: disable if already done
                                    >
                                        Mark Done
                                    </button>
                                    <button 
                                        onClick={()=>upperCaseOne(todo.id)} 
                                        className="action-btn uppercase-btn"
                                    >
                                        UPPERCASE
                                    </button>
                                    <button 
                                        onClick={()=>deleteTodo(todo.id)} 
                                        className="action-btn delete-btn"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            
            <div className="global-actions">
                <button onClick={upperCaseAll} className="global-btn uppercase-all-btn">UPPERCASE ALL</button>
                <button onClick={markAllDone} className="global-btn mark-all-done-btn">Mark All as Done</button>
            </div>

        </div>
    )
};