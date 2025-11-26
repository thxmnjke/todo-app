import { TodoItem } from "../TodoItem/TodoItem";

interface Props {
    value: string
    onClick: () => void
}

export function TaskList({ value, onClick }: Props) {
    return (
        <ul className="w-3xl ml-11">
            <TodoItem onClick={onClick} value={value} />
        </ul>
    )
}
