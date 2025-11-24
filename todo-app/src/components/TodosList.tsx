import {  useState } from "react";
import { TaskList } from "./TaskList";
import { CirclePlus } from "lucide-react";

type todosProps = {
    value: string
}

export function TodosLst() {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState<todosProps[]>([])

    function removeTodo(index: number) {
        todos.splice(index, 1)
        setTodos([...todos])
    }

    function addTodos() {
        if(text.length === 0) return
        setTodos([...todos, { value:text }])
        setText('')
    }

    function keyDownHandler(e: React.KeyboardEvent<HTMLElement>) {
        if(e.code === 'Enter') {
            addTodos()
        } else {
            return
        }
    }    

    return (        
            <div className="min-h-screen flex items-center">
                <div className="my-0 mx-auto bg-white h-173 w-209 overflow-auto
                                rounded-3xl border border-[#000000]">   
                    <h2 className="text-black mt-3.5 ml-11 text-4xl font-bold">Today</h2>
                    <div className="relative">
                        <button onClick={addTodos}><CirclePlus className="absolute left-12.5 top-7.5 size-6"/></button>
                        <input type="text" name="text" value={text} onKeyDown={keyDownHandler} onChange={(e) => {setText(e.target.value)}} placeholder="Add new task" 
                            className="rounded-2xl border border-[#000000] mt-5 ml-11
                                        h-11 w-3xl px-9.5" 
                        />
                    </div>
                    <ul>
                        {todos.map((t, i) => {
                            return (
                            <li key={i}><TaskList onClick={() => removeTodo(i)} value={t.value}/></li>)
                        })}
                    </ul>
                </div>
            </div>
    )
}
