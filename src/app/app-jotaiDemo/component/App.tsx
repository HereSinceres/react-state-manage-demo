/* eslint-disable react/react-in-jsx-scope */

import { Provider, useAtom } from 'jotai';
import { Suspense } from 'react';

import { postData, postId, postRandomT } from '../jotaiDemo.store';

function Id() {
  const [id] = useAtom(postId);
  return <div>{id}</div>;
}

function Next() {
  const [, set] = useAtom(postId);
  return (
    <button onClick={() => set((x) => x + 1)}>
      <div>→</div>
    </button>
  );
}

function PostInfo() {
  // This throws an expection that's caught by Reacts suspense boundary
  const [{ by, title, url, text, time }] = useAtom(postData);
  // And by the time we're here the data above is available
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

function RefreshButton() {
  const [, set] = useAtom(postRandomT);
  return (
    <button
      onClick={() => {
        set(new Date().valueOf());
      }}
    >
      刷新
    </button>
  );
}
export default function App() {
  return (
    <Provider>
      自动处理了依赖
      <Id />
      <div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <PostInfo />
        </Suspense>
      </div>
      <Next />
      <RefreshButton />
    </Provider>
  );
}
