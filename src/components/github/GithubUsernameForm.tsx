import React, { useState } from 'react';
import './GithubUsernameForm.css';

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void;
};

export default function GithubUsernameForm({
  onSubmitUsername,
}: GithubUsernameFormProps) {
  const [input, setInput] = useState('');

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    onSubmitUsername(input);
  };
  const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="GithubUsernameForm">
      <input
        onChange={onChange}
        value={input}
        placeholder="Github 계정명 입력"
      />
      <button type="submit">조회</button>
    </form>
  );
}
