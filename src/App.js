import React from 'react';
import './style.css';

import Counter from './Counter';
import TodoList from './TodoList';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <Counter />
      <TodoList />

      <ComponentA />
      <ComponentB />
    </div>
  );
}
