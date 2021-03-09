import React from 'react';
import Main from './components/Main';
import { RecoilRoot } from 'recoil';
export default function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}
