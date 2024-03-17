import { LucideXCircle } from "lucide-react";
import { TodoProps } from "../types/todo";

function Todo({ todo, deleteTodoItem, update }:TodoProps){

    return(
        <div className="flex item-center py-1 px-1 outline dark:outline-white rounded mb-4">
            <label className="peer flex gap-2 items-center" >
                <input onChange={()=> update(todo?.id)} type="Checkbox" name="" className="dark:border-white h-8 w-8 accent-red-800 peer" id=""/>
                <p className="text-xl dark:text-white font-medium peer-checked:line-through decoration-1" >{todo?.todo}</p>
            </label>
            <button onClick={()=> deleteTodoItem(todo?.id)} className="bg-black dark:bg-white px-1 py-1 rounded ml-auto" >
                <LucideXCircle className="dark:stroke-black stroke-white" />
            </button>
        </div>
    )
}

export default Todo;