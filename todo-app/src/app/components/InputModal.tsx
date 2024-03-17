import { useState } from "react";
import { InputModalProps } from "../types/todo";

function InputModal({create}: InputModalProps){

    const [todoItem, setTodoItem] = useState<string>("")

    const handleAddTodo = (e: React.ChangeEvent<HTMLFormElement>) =>{
        
        // console.log(e.target.value)
        
        setTodoItem(e.target.value)

    }

    const handleSubmitTodo = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        create({
            id:Math.round(Math.random()*10000),
            todo: todoItem.trim(),
            checked:false,
        })
        setTodoItem("")
    }

    return(
        <div className={`w-full mb-8`}>
            <form action="" className="border dark:border-white rounded-lg px-5 py-6" >
                <label htmlFor="todo_input" className="text-black dark:text-white block font-bold mb-3 text-2xl">
                    Todo Input
                </label>
                <input type="text" value={todoItem} onChange={handleAddTodo} id="Todo_input" className="border-none rounded-md block w-full text-lg px-3 py-4 font-medium focus:outline-none mb-4 bg-grey-200 dark:bg-white" placeholder="Enter Text Here" />
                <button onClick={handleSubmitTodo} className="bg-black dark:bg-white border-none rounded-md block w-full text-lg px-3 py-4 font-medium focus:outline-none duration-300 hover:bg-opacity-80 text-white dark:text-black" >Add</button>
            </form>
        </div>
    )

}


export default InputModal;