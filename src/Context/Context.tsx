import {createContext} from "react";

interface ContextType {
  items: any[];
  onChange: (items: any[]) => void;
  start: number;
  end: number;
  setStart: (start: number) => void;
  setEnd: (end: number) => void;
}

const initialContext = {
  items: [],
  onChange: () => {},
  start: -1,
  end: -1,
  setStart: () => {},
  setEnd: () => {}
}

export const Context = createContext<ContextType>(initialContext)
