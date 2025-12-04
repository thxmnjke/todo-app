import type { ReactNode } from "react"

interface Props {
    children: ReactNode
    onClick: any
}

export function Button({ children, onClick }: Props) {
    return <button onClick={onClick}>{ children }</button>
}
