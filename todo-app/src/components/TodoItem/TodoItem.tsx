import { Trash } from "lucide-react"
import cn  from 'clsx'
import { Button } from "../Button/Button"
import { useTodoListStore } from '../../store/todo-list-store'

interface Props {
    value: string
    id: number
}

export function TodoItem({ value, id }: Props) {
    const { removeTodo, handleChecked, isChecked } = useTodoListStore()

    return (
            <div className="flex items-center gap-3 py-2.5 border-b pl-2.5 text-sm opacity-70 relative">
                <input type="checkbox" checked={isChecked} onChange={() =>handleChecked()} className="cursor-pointer"/>
                <span className={cn(isChecked && 'line-through decoration-skip-ink-none', " decoration-1 decoration-slate-900 decoration-solid")}>
                    { value } 
                </span>
                <Button onClick={() => {removeTodo(id)}}><Trash className="absolute left-185 top-3 size-5"/></Button>
            </div>
    )
}
