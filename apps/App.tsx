import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Main from './components/Main';
import { RecoilRoot } from 'recoil';
export default function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}
