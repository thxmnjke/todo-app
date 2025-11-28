import { TodoItem } from "../TodoItem/TodoItem";


interface Props {
    value: string
    id: number
}

export function TaskList({ value, id }: Props) {
    return (
        <ul className="w-3xl ml-8">
            <TodoItem  value={value} id={id}/>
        </ul>
   )
}