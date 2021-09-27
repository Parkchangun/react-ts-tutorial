import React, { CSSProperties } from 'react';
import { Todo } from '../../modules/todos';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  const textStyle: CSSProperties = {
    textDecoration: todo.done ? 'line-through' : 'none',
  };

  const removeStyle: CSSProperties = {
    color: 'red',
    marginLeft: 8,
  };

  return (
    <li>
      <span onClick={() => onToggle(todo.id)} style={textStyle}>
        {todo.text}
      </span>
      <span onClick={() => onRemove(todo.id)} style={removeStyle}>
        (X)
      </span>
    </li>
  );
}
