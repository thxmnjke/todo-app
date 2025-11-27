import { createContext } from "react";

interface TodoContextType {
  removeTodo: (id:number) => void;
}

export const TodoContext = createContext<TodoContextType>({
    removeTodo: () => {}
})