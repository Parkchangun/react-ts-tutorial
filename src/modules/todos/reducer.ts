import { createReducer } from 'typesafe-actions';
import { TodosAction, TodosState } from './types';
import { addTodo, removeTodo, toggleTodo } from './actions';

const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState)
  .handleAction(addTodo, (state, action) => state.concat({ ...action.payload }))
  .handleAction(toggleTodo, (state, action) =>
    state.map(todo =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
    ),
  )
  .handleAction(removeTodo, (state, action) =>
    state.filter(todo => todo.id !== action.payload),
  );

export default todos;
