import React from 'react';
import Header from '../Header';
import { SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import HeaderContainer from '../../container/HeaderContainer';
import { useRecoilValue } from 'recoil';
import { TwitList } from '../../atom/TwitListAtom';
import NavContainer from '../../container/NavContainer';
import { Loading } from '../../atom/LoadingAtom';
import SkeletonLoading from '../common/SkeletonLoading';
import { StatusBar } from 'expo-status-bar';

const CardViewWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

const Main = () => {
  const cardView = useRecoilValue(TwitList);
  const loadingView = useRecoilValue(Loading);

  return (
    <SafeAreaView>
      <StatusBar />
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
