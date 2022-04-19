import React from 'react';

import { useTodoCtx } from './context/TodoContext';
import { createTodo } from './store/TodoStore';

const ComponentB = () => {
  const { selectedTodo, setSelectedTodo, dispatch } = useTodoCtx();

  const addSelectedTodo = () => {
    const todo = {
      text: 'Replace Todo by ComponentB',
      completed: true,
      updatedBy: 'ComponentB',
    };
    setSelectedTodo(todo);
    dispatch(createTodo(todo));
  };

  return (
    <div className="ComponentB">
      <h1>
        ComponentB
        {/* <pre>{JSON.stringify(selectedTodo, null, 2)}</pre>
      <pre>{JSON.stringify(state, null, 2)}</pre> */}
        &nbsp;<button onClick={addSelectedTodo}>Add ToDo</button>
      </h1>
    </div>
  );
};

export default ComponentB;
