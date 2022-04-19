// Action Types

export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

// Actions

export const createTodo = (todo) => ({
  type: CREATE,
  todo,
});

export const updateTodo = (todo) => ({
  type: UPDATE,
  todo,
});

export const deleteTodo = (todo) => ({
  type: DELETE,
  todo,
});

// Reducer

export const initialTodo = {
  todos: [
    {
      id: 1,
      text: 'Todo 1',
      completed: false,
      createdBy: 'System',
      createdAt: new Date('2020-11-28'),
    },
    {
      id: 2,
      text: 'Todo 2',
      completed: false,
      createdBy: 'System',
      createdAt: new Date('2020-11-27'),
    },
    {
      id: 3,
      text: 'Todo 3',
      completed: false,
      createdBy: 'System',
      createdAt: new Date('2020-11-26'),
    },
  ],
  todo: null,
};

export const todoReducer = (state, action) => {
  const { todos } = state;
  const { type, todo } = action;
  switch (type) {
    case CREATE:
      return {
        todos: [
          ...todos,
          {
            id: todos.length + 1,
            ...todo,
            createdAt: new Date(),
          },
        ],
      };
    case UPDATE:
      return {
        todos: todos.map((item) => {
          if (item.id == todo.id) {
            todo.updatedAt = new Date();
            return todo;
          }
          return item;
        }),
      };
    case DELETE:
      return {
        todos: todos.filter((item) => item.id != todo.id),
      };
    default:
      return state;
  }
};
