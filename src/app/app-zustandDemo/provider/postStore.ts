import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import create, { StateCreator } from 'zustand';

import { ApiService } from '../../../api/ApiService';

export interface ILoginSlice {
  isLoggedIn: boolean;
  postId: number;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setPostId: (isLoggedIn: number) => void;
  randomT: number;
  setRandomT: (randomT: number) => void;
}

const createLoginSlice: StateCreator<ILoginSlice> = (set) => ({
  isLoggedIn: false,
  postId: 9001,
  randomT: new Date().valueOf(),
  setIsLoggedIn: (isLoggedIn): void => {
    set({ isLoggedIn });
  },
  setPostId: (postId): void => {
    set({ postId });
  },
  setRandomT: (randomT): void => {
    set({ randomT });
  }
});

export const useStore = create(createLoginSlice);

export const GetUserDetails = () => {
  const staffRequestService = ApiService.createInstance();
  const [postId, randomT] = useStore((state) => [state.postId, state.randomT]);

  return useQuery(['UserDetails', postId, randomT], async () => {
    const response: AxiosResponse = await staffRequestService.getCharacters(postId, randomT);
    return response.data;
  });
};
