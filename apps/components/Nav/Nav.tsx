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
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(235, 238, 240);
  border-bottom-width: 2px;
`;

interface INav {
  selectItem: (itemName: string) => void;
  selectedItem: string;
}

interface StyledProps {
  item: string;
}

const Nav = ({ selectItem, selectedItem }: INav) => {
  const NavItems = styled.TouchableOpacity`
    font-size: 15px;
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom-width: ${(props: StyledProps) =>
      props.item === selectedItem ? 2 : 0};
    border-bottom-color: ${(props: StyledProps) =>
      props.item === selectedItem ? 'rgb(29, 161, 242)' : 'black'};
  `;

  const ItemsName = styled.Text`
    display: flex;
    justify-content: center;
    font-size: 15px;
    color: ${(props: StyledProps) =>
      props.item === selectedItem ? 'rgb(29, 161, 242)' : 'grey'};
  `;

  return (
    <NavWarpper>
      <NavItems item="popular" onPress={() => selectItem('popular')}>
        <ItemsName item="popular">인기</ItemsName>
      </NavItems>
      <NavItems item="upToDate" onPress={() => selectItem('upToDate')}>
        <ItemsName item="upToDate">최신</ItemsName>
      </NavItems>
      <NavItems item="users" onPress={() => selectItem('users')}>
        <ItemsName item="users">사용자</ItemsName>
      </NavItems>
      <NavItems item="photos" onPress={() => selectItem('photos')}>
        <ItemsName item="photos">사진</ItemsName>
      </NavItems>
      <NavItems item="videos" onPress={() => selectItem('videos')}>
        <ItemsName item="videos">동영상</ItemsName>
      </NavItems>
    </NavWarpper>
  );
};

export default Nav;
