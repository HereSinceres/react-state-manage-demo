/* eslint-disable react/react-in-jsx-scope */

import { GetUserDetails, useStore } from '../provider/postStore';

function Id() {
  const postId = useStore((state) => state.postId);
  return <div>{postId}</div>;
}

function PostInfo() {
  const { isLoading, isFetching, data = { results: [] } } = GetUserDetails();
  if (isLoading) {
    return <>isLoading</>;
  }
  if (isFetching) {
    return <>isFetching</>;
  }
  const { by, title, url, text, time } = data;
  return (
    <>
      <h2>{by}</h2>
      <h6>{new Date(time * 1000).toLocaleDateString('en-US')}</h6>
      {title && <h4>{title}</h4>}
      <a href={url}>{url}</a>
      <p>{text}</p>
    </>
  );
}

function Next() {
  const setPostId = useStore((state) => state.setPostId);

  const postId = useStore((state) => state.postId);
  return (
    <button onClick={() => setPostId(postId + 1)}>
      <div>→</div>
    </button>
  );
}

function RefreshButton() {
  const setRandomT = useStore((state) => state.setRandomT);
  return <button onClick={() => setRandomT(new Date().valueOf())}>刷新</button>;
}
export default function App() {
  return (
    <>
      <Id />
      <PostInfo />
      <Next />
      <RefreshButton />
    </>
  );
}
