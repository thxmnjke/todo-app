import {  useState } from "react";
import { TaskList } from "../TaskList/TaskList";
import { CirclePlus } from "lucide-react";
import { Button } from "../Button/Button";
import { TodoContext } from "../../context/TodoContext";

export type todosProps = {
    value: string
}

export function TodoList() {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState<todosProps[]>([])

    function removeTodo(index: number) {
        todos.splice(index, 1)
        setTodos([...todos])
    }
    //вот тут кароче need help чучуть в плане что так можно или нет 
    // ибо без "| undefined"  он просит этот аргумент а мне то он там не нужен
    function addTodos(e?: React.FormEvent<HTMLFormElement> | undefined) { 
        e?.preventDefault()
        if(text.length === 0) return
        setTodos([...todos, { value:text }])
        setText('')
    }   

    return (
            <TodoContext.Provider value={{removeTodo}}>
                <div className="min-h-screen flex items-center">
                    <div className="my-0 mx-auto bg-white h-173 w-209 overflow-auto
                                    rounded-3xl border border-[#000000]">   
                        <h2 className="text-black mt-3.5 ml-11 text-4xl font-bold">Today</h2>
                        <form>
                            <div className="relative">
                            <Button onClick={addTodos}><CirclePlus className="absolute left-12.5 top-7.5 size-6"/></Button>
                            <input type="text" name="text" value={text} onChange={(e) => {setText(e.target.value)}} placeholder="Add new task" 
                                className="rounded-2xl border border-[#000000] mt-5 ml-11
                                            h-11 w-3xl px-9.5" 
                            />
                            </div>
                        </form>
                        <ul>
                            {todos.map((t, i) => {
                                return (
                                <li key={i}><TaskList id={i} value={t.value}/></li>)
                            })}
                        </ul> 
                    </div>
                </div>
            </TodoContext.Provider>
    )
}
