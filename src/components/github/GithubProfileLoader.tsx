import React from 'react';
import GithubUsernameForm from './GithubUsernameForm';
import GithubProfileInfo from './GithubProfileInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { getUserProfileThunk } from '../../modules/github';

export default function GithubProfileLoader() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.github.userProfile,
  );
  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    dispatch(getUserProfileThunk(username));
  };

  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{ textAlign: 'center' }}>Loading..</p>}
      {error && <p style={{ textAlign: 'center' }}>Error!</p>}
      {data && (
        <GithubProfileInfo
          name={data.name}
          thumbnail={data.avatar_url}
          bio={data.bio}
          blog={data.blog}
        />
      )}
    </>
  );
}
