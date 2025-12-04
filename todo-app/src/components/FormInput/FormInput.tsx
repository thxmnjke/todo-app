import { CirclePlus } from "lucide-react";
import { Button } from "../Button/Button";
import { v4 as uuidv4 } from 'uuid';
import { type todosProps } from "../TodoApp/TodoApp"

interface Props {
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
    todos: todosProps[]
    setTodos: React.Dispatch<React.SetStateAction<todosProps[]>>
}

export function FormInput({text, setText, todos, setTodos}: Props) {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function addTodos(e?: any) { 
        e.preventDefault()
        if(text.length === 0) return
        setTodos([...todos, { value:text, index: uuidv4() }])
        setText('')
    }

    return (
        <form className="w-209">
            <div className="relative">
            <Button onClick={addTodos}><CirclePlus className="absolute left-11.5 top-7.5 size-6"/></Button>
            <input type="text" name="text" value={text} onChange={(e) => {setText(e.target.value)}} placeholder="Add new task" 
                className="rounded-2xl border border-[#000000] mt-5 mx-8
                            h-11 w-3xl px-12.5" 
            />
            </div>
        </form>
    )
}
