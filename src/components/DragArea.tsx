import { useCallback, useEffect, useState } from "react";
import { Context } from "../Context/Context";

type DragAreaProps = {
    children: React.ReactNode,
    items: any[],
    onChange: (items: any[]) => void
}

export const DragArea = ({children, items, onChange}: DragAreaProps) => {

    const [start, setStart] = useState(-1)
    const [end, setEnd] = useState(-1)

    useEffect(() => {
        if (start === -1 || end === -1 || start === end) return

        const tmp = items[start]
        if (end > start) {
            for (let i = start; i < end; i++) {
                items[i] = items[i + 1]
            }
        } else {
            for (let i = start; i > end; i--) {
                items[i] = items[i - 1]
            }
        }
        items[end] = tmp
        
        onChange([...items])
    }, [end, onChange])

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }, [])

  return (
    <Context.Provider value={{items, onChange, start, end, setStart, setEnd }}>
        <div onDragOver={handleDragOver}>
            {children}
        </div>
    </Context.Provider>
  );
};