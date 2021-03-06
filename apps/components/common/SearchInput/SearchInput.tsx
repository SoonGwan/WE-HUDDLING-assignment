import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import styled from 'styled-components/native';

const SearchInputWrapper = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>
    props.focus ? 'rgb(255,255,255)' : 'rgb(235, 238, 240)'};
  width: 64%;
  border: ${(props) =>
    props.focus
      ? '2px solid rgb(121, 197, 244)'
      : '0px solid rgb(121, 197, 244)'};
  height: 29px;
  border-radius: 24px;
  align-items: center;
  font-size: 15px;

  &:focus {
    background-color: red;
  }
`;

const PressWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`;

const SearchImg = styled.Image`
  width: 18.7px;
  height: 18.7px;
  margin-left: 22px;
  margin-right: 12px;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: '#767676',
})`
  width: 80%;
  height: 100%;
`;

const SearchInput = () => {
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    console.log(isFocus);
  }, [isFocus]);

  return (
    <>
      <SearchInputWrapper focus={isFocus}>
        <SearchImg source={require('../../../icon/icons8-search-30.png')} />
        <Input
          placeholder="트위터 검색"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </SearchInputWrapper>
      {/* <Button title="Learn More" color="#841584" /> */}
    </>
  );
};

export default SearchInput;
