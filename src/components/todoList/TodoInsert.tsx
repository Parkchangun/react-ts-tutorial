import React, { useState } from 'react';

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

export default function TodoInsert({ onInsert }: TodoInsertProps) {
  const [value, setValue] = useState('');

  const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="할 일 입력하기" value={value} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}
