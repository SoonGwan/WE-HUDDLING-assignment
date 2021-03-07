import React, { useState, useRef } from 'react';
import Header from '../Header';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
} from 'react-native';
import Nav from '../Nav';
import styled from 'styled-components/native';
import CardViewContainer from '../../container/CardViewContainer';
import HeaderContainer from '../../container/HeaderContainer';
import { useRecoilValue } from 'recoil';
import { TwitList } from '../../atom/TwitListAtom';
const Main = () => {
  const cardView = useRecoilValue(TwitList);
  return (
    <SafeAreaView>
      <ScrollView scrollEventThrottle={10} stickyHeaderIndices={[1]}>
        <HeaderContainer />
        <Nav />
        {cardView}
        {/* <CardViewContainer /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
