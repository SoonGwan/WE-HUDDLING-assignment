import { atom, RecoilState } from 'recoil';

export const TwitList = atom<JSX.Element[]>({
  key: 'default',
  default: [],
});
