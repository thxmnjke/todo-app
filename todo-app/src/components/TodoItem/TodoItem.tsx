import { Trash } from "lucide-react"
import { useState, type ReactNode } from "react"
import cn  from 'clsx'
import { Button } from "../Button/Button"
import type { todosProps } from "../TodoApp/TodoApp"

interface Props {
    children: ReactNode
    index: string
    todos: todosProps[]
    setTodos: React.Dispatch<React.SetStateAction<todosProps[]>>
}

export function TodoItem({ children, index, todos, setTodos}: Props) {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheacked = () => {
        setIsChecked(current => !current)
    }

    function removeTodo(index: string) {
        const filteredTodos = todos.filter((t) => t.index !== index)
        setTodos([...filteredTodos])   
    }

    return (
        <li>
            <div className="flex items-center gap-3 py-2.5 border-b pl-2.5 text-sm opacity-70 relative">
                <input type="checkbox" checked={isChecked} onChange={handleCheacked} className="cursor-pointer"/>
                <span className={cn(isChecked && 'line-through decoration-skip-ink-none', " decoration-1 decoration-slate-900 decoration-solid")}>
                    { children } 
                </span>
                <Button onClick={() => {removeTodo(index)}}><Trash className="absolute left-185 top-3 size-5"/></Button>
            </div>
        </li>
    )
}
