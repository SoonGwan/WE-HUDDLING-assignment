import { atom, RecoilState } from 'recoil';

export const Loading = atom<Boolean>({
  key: 'loading',
  default: false,
});
