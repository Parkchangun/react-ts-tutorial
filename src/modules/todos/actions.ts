import { createAction } from 'typesafe-actions';

let nextId = 1;

export const addTodo = createAction('todos/ADD_TODO', (text: string) => ({
  id: (nextId += 1),
  text,
  done: false,
}))();
export const toggleTodo = createAction('todos/TOGGLE_TODO')<number>();
export const removeTodo = createAction('todos/REMOVE_TODO')<number>();
