// Action Types

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

// Actions

export const increase = (payload) => ({
  type: INCREASE,
  payload,
});

export const decrease = (payload) => ({
  type: DECREASE,
  payload,
});

// Reducer

export const initialCounter = 0;

export const counterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREASE:
      return (state += payload);
    case DECREASE:
      return (state -= payload);
    default:
      return state;
  }
};
