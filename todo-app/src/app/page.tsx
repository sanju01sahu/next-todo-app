'use client'
import Image from 'next/image'
import InputModal from './components/InputModal'
import Todo from './components/Todo'
import { useEffect, useState } from 'react'
import { TodosArray } from './types/todo'

export default function Home() {
  const [todos, setTodo] = useState<TodosArray[]>([])

  const createTodo = (todo: TodosArray) =>{
    const checkTodos = todos.find((item)=> item.todo === todo.todo);
    if(checkTodos) return;
    setTodo([...todos, todo])
  }
  const deleteTodo = (id:number)=>{
    setTodo(todos.filter((todo)=> todo.id !== id))
  }

  const UpdateTodo = (id: number)=>{
    setTodo(todos.map(todo=> todo.id === id ? {...todo, checked: !todo.checked} : todo));
  }

  useEffect(()=>{
    // console.log(todos)
    const saveTodo = async()=>{
      const res = await fetch('/api/todos', {
        method: 'POST',
        body:JSON.stringify({todos})
      })
    }
    


  })


  return (
    <>
      <div className="max-w-3xl mx-auto px-3">
        <InputModal create={createTodo} />

        <h1 className='text-2xl md:text-4xl dark:text-white underline text-center mb-8' >
          Todo List
        </h1>
        <div>
          {todos.map((todo)=>(
            <Todo key = {todo.id} todo={todo} deleteTodoItem ={deleteTodo} update={UpdateTodo} />
            
          ))}
        </div>
      </div>
    </>
  )
}
