import { useCallback, useContext } from "react";
import { Context } from "../Context/Context";

type DragItemProps = {
    children: React.ReactNode,
    index: number
}

export const DragItem = ({children, index}: DragItemProps) => {

    const { setStart, setEnd } = useContext(Context)

    const handleDragStart = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        setStart(index)
    }, [setStart, index])

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation()

        setEnd(index)
    }, [setEnd, index])
  
  return (
    <div draggable onDragStart={handleDragStart} onDrop={handleDrop}>
        {children}
    </div>
  );
};