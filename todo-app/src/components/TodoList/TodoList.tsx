import { TaskList } from "../TaskList/TaskList";
import { CirclePlus } from "lucide-react";
import { Button } from "../Button/Button";
import { useTodoListStore } from '../../store/todo-list-store'

export type todosProps = {
    value: string
}

export function TodoList() {
    const { text, todos, setText, addTodos } = useTodoListStore()  

    return (
                <div className="min-h-screen flex items-center">
                    <div className="my-0 mx-auto bg-white h-173 w-209 overflow-x-hidden overflow-y-auto
                                    rounded-3xl border border-[#000000]">   
                        <h2 className="text-black mt-3.5 ml-8 text-4xl font-semi font-['Oswald']">Today</h2>
                        <form className="w-209">
                            <div className="relative">
                            <Button onClick={addTodos}><CirclePlus className="absolute left-11.5 top-7.5 size-6"/></Button>
                            <input type="text" name="text" value={text} onChange={(e) => {setText(e.target.value)}} placeholder="Add new task" 
                                className="rounded-2xl border border-[#000000] mt-5 mx-8
                                            h-11 w-3xl px-12.5" 
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
    )
}
