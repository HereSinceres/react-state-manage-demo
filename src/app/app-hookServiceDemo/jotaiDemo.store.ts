import { atom } from 'jotai';

export const postId = atom(9001);
export const postRandomT = atom(new Date().valueOf());
export const postData = atom(async (get) => {
  const id = get(postId);
  const random = get(postRandomT);
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?t=${random}`);
  return await response.json();
});
