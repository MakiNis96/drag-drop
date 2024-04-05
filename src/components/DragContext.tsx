import React from "react";

type DragContextProps = {
    children: React.ReactNode
}


export const DragContext = ({children}: DragContextProps) => {
  

  return (
    <>
        {children}
    </>
  );
};