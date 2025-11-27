import type { ReactNode } from "react"

interface Props {
    children: ReactNode
    onClick: () => void
}

export function Button({ children, onClick }: Props) {
    return <button onClick={onClick}>{ children }</button>
}
