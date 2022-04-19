import React from 'react';

import { useTodoCtx } from './context/TodoContext';
import { createTodo } from './store/TodoStore';

const ComponentA = () => {
  const { selectedTodo, setSelectedTodo, todoList, dispatch } = useTodoCtx();

  const addSelectedTodo = () => {
    const todo = {
      text: 'Replace Todo by ComponentA',
      completed: true,
      updatedBy: 'ComponentA',
    };
    setSelectedTodo(todo);
    dispatch(createTodo(todo));
  };

  return (
    <div className="ComponentA">
      <h1>
        ComponentA
        {/* <pre>{JSON.stringify(todoList, null, 2)}</pre>
      <pre>{JSON.stringify(selectedTodo, null, 2)}</pre>
      <pre>{JSON.stringify(state, null, 2)}</pre> */}
        &nbsp;<button onClick={addSelectedTodo}>Add ToDo</button>
      </h1>
    </div>
  );
};

export default ComponentA;
