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
import HeaderContainer from '../../container/HeaderContainer';
import { useRecoilValue } from 'recoil';
import { TwitList } from '../../atom/TwitListAtom';
import SocialTab from '../common/SocialTab';
import NavContainer from '../../container/NavContainer';
import { Loading } from '../../atom/LoadingAtom';
import SkeletonLoading from '../common/SkeletonLoading';

const CardViewWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

const Main = () => {
  const cardView = useRecoilValue(TwitList);
  const loadingView = useRecoilValue(Loading);

  return (
    <SafeAreaView>
      <CardViewWrapper>
        <ScrollView scrollEventThrottle={10} stickyHeaderIndices={[1]}>
          <HeaderContainer />
          <NavContainer />
          {loadingView ? <SkeletonLoading /> : cardView}
        </ScrollView>
      </CardViewWrapper>
    </SafeAreaView>
  );
};

export default Main;
