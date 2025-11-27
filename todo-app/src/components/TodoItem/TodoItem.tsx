import { Trash } from "lucide-react"
import { useState, useContext } from "react"
import cn  from 'clsx'
import { Button } from "../Button/Button"
import { TodoContext } from "../../context/TodoContext";

interface Props {
    value: string
    id: number
}

export function TodoItem({ value, id }: Props) {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheacked = () => {
        setIsChecked(current => !current)
    }

    const { removeTodo } = useContext(TodoContext)

    return (
        <>
            <div className="flex items-center gap-3 py-2.5 border-b pl-2.5 text-sm opacity-70 relative">
                <input type="checkbox" checked={isChecked} onChange={handleCheacked} className="cursor-pointer"/>
                <span className={cn(isChecked && 'line-through decoration-skip-ink-none', "leading-none decoration-1 decoration-slate-900 decoration-solid")}>
                    { value } 
                </span>
                <Button onClick={() => {removeTodo(id)}}><Trash className="absolute left-185 top-2 size-5"/></Button>
            </div>
        </>
    )
}
