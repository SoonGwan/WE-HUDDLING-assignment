import React from 'react';
import SearchInput from '../common/SearchInput';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const HeaderWrapper = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const GoBackImg = styled.Image`
  width: 22.5px;
  height: 22.5px;
  margin-left: 12px;
`;

const MoreImg = styled.Image`
  width: 22.5px;
  height: 22.5px;
  margin-right: 12px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <GoBackImg source={require('../../icon/icons8-left-arrow-32.png')} />
      <SearchInput />
      <MoreImg source={require('../../icon/icons8-more-32.png')} />
    </HeaderWrapper>
  );
};

export default Header;
