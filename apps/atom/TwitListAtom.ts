import { atom, RecoilState } from 'recoil';

export const TwitList: RecoilState<any> = atom({
  key: 'default',
  default: [],
});
