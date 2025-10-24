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
        <div>
            <input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTodo}>Add Task</button>
            <br></br><br></br><br></br>
            <hr></hr>
            <h4> Tasks Todo </h4>
            {/* all the list items we are adding should have a unique identifier for it  */}
            {/* We can use uuid packeage in npm for assigning randomly unique value to each list item */}
            {/* //for rendering array we use our map method  */}
            <ul>
                {
                    todos.map((todo)=>{
                        return(
                            <li key={todo.id}>
                            <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                            &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete Task</button>
                            <button onClick={()=>upperCaseOne(todo.id)}>UpperCase Task</button>
                            <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                        </li>
                        )
                        
                    })
                }
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>UpperCaseAll</button>
            <button onClick={markAllDone}>Mark All as Done</button>

        </div>
    )
};