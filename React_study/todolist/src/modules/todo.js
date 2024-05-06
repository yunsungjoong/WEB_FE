import { createAction, handleActions } from 'redux-actions';

const INSERT = 'todo/INSERT';
const REMOVE = 'todo/REMOVE';
const TOGGLE = 'todo/TOGGLE';

// action creator
let id = 5;
export const insert = createAction(INSERT, (content) => ({
  id: id++,
  content,
  isDone: false,
}));
export const remove = createAction(REMOVE, (id) => id);
export const toggle = createAction(TOGGLE, (id) => id);

// initial state
export const initialState = {
  todos: [
    {
      id: 1,
      content: 'Redux 초기 상태와 Action Creator 만들기',
      isDone: true,
    },
    {
      id: 2,
      content: 'Redux 리듀서 함수 만들기',
      isDone: true,
    },
    {
      id: 3,
      content: 'Redux 디스패쳐 만들기',
      isDone: false,
    },
    {
      id: 4,
      content: 'Redux 스토어 만들기',
      isDone: false,
    },
  ],
};

// reducer
const todo = handleActions(
  {
    [INSERT]: (state, { payload: todo }) => ({
      todos: [...state.todos, todo],
    }),
    [REMOVE]: (state, { payload: id }) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)),
    }),
  },
  initialState
);

export default todo;