import { atom } from 'jotai';

const postId = atom(9001);
const postRandomT = atom(new Date().valueOf());

const postData = atom(async (get) => {
  const id = get(postId);
  const random = get(postRandomT);
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?t=${random}`);
  return await response.json();
});

export { postId, postRandomT, postData };
