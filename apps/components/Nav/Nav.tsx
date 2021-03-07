import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const NavWarpper = styled.View`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 53px; */
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(235, 238, 240);
  border-bottom-width: 2;
`;

const NavItems = styled.View`
  font-size: 15px;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ItemsName = styled.Text`
  font-size: 15px;
`;

const Nav = () => {
  return (
    <NavWarpper>
      <NavItems>
        <ItemsName>인기</ItemsName>
      </NavItems>
      <NavItems>
        <ItemsName>최신</ItemsName>
      </NavItems>
      <NavItems>
        <ItemsName>사용자</ItemsName>
      </NavItems>
      <NavItems>
        <ItemsName>사진</ItemsName>
      </NavItems>
      <NavItems>
        <ItemsName>동영상</ItemsName>
      </NavItems>
    </NavWarpper>
  );
};

export default Nav;
