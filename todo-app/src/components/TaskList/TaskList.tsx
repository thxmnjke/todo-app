import { TodoItem } from "../TodoItem/TodoItem";
import { type todosProps} from "../TodoApp/TodoApp" 


interface Props {
    value: string
    todos: todosProps[]
    setTodos: React.Dispatch<React.SetStateAction<todosProps[]>>
}

export function TaskList({ todos, setTodos }: Props) {
    return (
        <ul className="w-3xl ml-8">
            {todos.map((t) => {
                return (
                    <TodoItem setTodos={setTodos} todos={todos} key={t.index} index={t.index}>{t.value}</TodoItem>)
            })} 
        </ul>
   )
}