import { useState } from "react";
import { FormInput } from "../FormInput/FormInput";
import { TaskList } from "../TaskList/TaskList";

export type todosProps = {
    value: string
    index: string
}

export function TodoApp() {
    const [text, setText] = useState<string>('')
    const [todos, setTodos] = useState<todosProps[]>([])  

    return (            
        <div className="min-h-screen flex items-center">
            <div className="my-0 mx-auto bg-white h-173 w-209
                            rounded-3xl border border-[#000000]">   
                <h2 className="text-black mt-3.5 ml-8 text-4xl font-semi font-['Oswald']">Today</h2>
                <FormInput text={text} todos={todos} setTodos={setTodos} setText={setText}/>
                <div className="overflow-y-auto max-h-142">
                    <TaskList todos={todos} setTodos={setTodos} value={text}/>
                </div>
            </div>
        </div>
            
    )
}

