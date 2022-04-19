import React, { useState, useReducer } from 'react';

import { initialTodo, todoReducer } from '../store/TodoStore';

const initialTodos = [
  {
    text: 'Todo 1',
    completed: false,
    createdBy: 'System',
    createdAt: new Date('2020-11-28'),
  },
  {
    text: 'Todo 2',
    completed: false,
    createdBy: 'System',
    createdAt: new Date('2020-11-27'),
  },
  {
    text: 'Todo 3',
    completed: false,
    createdBy: 'System',
    createdAt: new Date('2020-11-26'),
  },
];

const TodoContext = React.createContext({});

export const TodoProvider = (props) => {
  const [todoList, setTodoList] = useState(initialTodos);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [state, dispatch] = useReducer(todoReducer, initialTodo);

  return (
    <TodoContext.Provider
      value={{
        selectedTodo,
        setSelectedTodo,
        todoList,
        setTodoList,

        state,
        dispatch,
      }}
      {...props}
    />
  );
};

export const useTodoCtx = () => React.useContext(TodoContext);
