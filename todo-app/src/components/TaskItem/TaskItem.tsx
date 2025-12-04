import { Trash } from "lucide-react"
import { useState} from "react"
import cn  from 'clsx'
import { Button } from "../Button/Button"
import { type todosProps } from "../TodoApp/TodoApp"

interface Props {
    value: string
    index: string
    todos: todosProps[]
    setTodos: React.Dispatch<React.SetStateAction<todosProps[]>>
}

export function TaskItem({ index, setTodos, todos}: Props) {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheacked = () => {
        setIsChecked(current => !current)
    }

    

    return (
        <ul className="w-3xl ml-8">
            {todos.map((t) => {
                return (
                    <li className="flex items-center gap-3 py-2.5 border-b pl-2.5 text-sm opacity-70 relative ">
                        <input type="checkbox" checked={isChecked} onChange={handleCheacked} className="cursor-pointer"/>
                        <span className={cn(isChecked && 'line-through decoration-skip-ink-none', " decoration-1 decoration-slate-900 decoration-solid")}>
                            {t.value}
                        </span>
                        <Button onClick={() => {removeTodo(index)}}><Trash className="absolute left-185 top-3 size-5"/></Button>
                    </li>
                )})}
        </ul>    
    )
}

