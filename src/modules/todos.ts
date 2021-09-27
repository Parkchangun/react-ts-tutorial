import { ActionType, createAction, createReducer } from 'typesafe-actions';

let nextId = 1;

export const addTodo = createAction('todos/ADD_TODO', (text: string) => ({
  id: (nextId += 1),
  text,
  done: false,
}))();
export const toggleTodo = createAction('todos/TOGGLE_TODO')<number>();
export const removeTodo = createAction('todos/REMOVE_TODO')<number>();

//State Type
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
type TodosState = Todo[];

//Action type 정의
const actions = {
  addTodo,
  toggleTodo,
  removeTodo,
};
type TodosAction = ActionType<typeof actions>;

//초기값 설정
const initialState: TodosState = [];

//reducer 생성
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

// export default function todos(
//   state: TodosState = initialState,
//   action: TodosAction,
// ): TodosState {
//   switch (action.type) {
//     case ADD_TODO:
//       return state.concat({
//         id: action.payload.id,
//         text: action.payload.text,
//         done: false,
//       });
//     case TOGGLE_TODO:
//       return state.map(todo =>
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
//       );
//     case REMOVE_TODO:
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }
