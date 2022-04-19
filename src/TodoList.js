import React from 'react';

import { useTodoCtx } from './context/TodoContext';

const TodoList = () => {
  const { state } = useTodoCtx();

  return (
    <div className="TodoList">
      <h1>TodoList</h1>
      <pre>{JSON.stringify(state.todos, null, 2)}</pre>
    </div>
  );
};

export default TodoList;
