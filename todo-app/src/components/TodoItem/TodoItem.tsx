import { Trash } from "lucide-react"
import { useState } from "react"
import cn  from 'clsx'
import { Button } from "../Button/Button"

interface Props {
    value: string
    onClick: () => void
}

export function TodoItem({ value, onClick }: Props) {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheacked = () => {
        setIsChecked(current => !current)
    }

    return (
        <>
            <div className="flex items-center gap-3 py-2.5 border-b pl-2.5 text-sm opacity-70 relative">
                <input type="checkbox" checked={isChecked}  onChange={handleCheacked}/>
                <span className={cn(isChecked && 'line-through')}>{ value }</span>
                <Button onClick={onClick}><Trash className="absolute left-185 top-3.5 size-5"/></Button>
            </div>
        </>
    )
}
