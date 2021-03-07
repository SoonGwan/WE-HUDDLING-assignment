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

const Main = () => {
  return (
    <SafeAreaView>
      <ScrollView scrollEventThrottle={10} stickyHeaderIndices={[1]}>
        <HeaderContainer />
        <Nav />
        <CardViewContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
