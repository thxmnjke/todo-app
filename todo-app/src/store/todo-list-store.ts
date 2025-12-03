import { create } from "zustand";

export interface Todo {
    value: string
}

export interface TodoList {
    text: string
    todos: Todo[]
    setText: (value: string) => void
    addTodos: (e: any) => void
    removeTodo: (index: number) => void
    isChecked: boolean
    setIsChecked: (value: boolean) => void
    handleChecked: () => void
}

export const useTodoListStore = create<TodoList>((set, get) => ({
    text: '',
    todos: [],
    setText: (value: string) => set({text: value}),
    addTodos: (e) => {
        e.preventDefault()
        const { text, todos } = get()
        if(text.length === 0) return

        set({
            todos: [...todos, {value: text}],
            text: ''
        })
    },
    removeTodo: (index: number) => {
        const { todos } = get()
        const updateTodos = [...todos]
        updateTodos.splice(index, 1)
        set({todos: updateTodos})
    },
    isChecked: false,
    setIsChecked: (value) => set({ isChecked: value}),
    handleChecked: () => {
        const { isChecked } = get()
        set({isChecked: !isChecked})
    },
}))