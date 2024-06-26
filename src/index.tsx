import React from 'react';
import ReactDOM from 'react-dom/client';
import { DraggableUserList } from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DraggableUserList />
  </React.StrictMode>
);
