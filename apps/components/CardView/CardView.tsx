import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const CardViewWrapper = styled.View`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  border-bottom-color: rgb(249, 249, 249);
  border-bottom-width: 2;
`;

const TwitWrapper = styled.View`
  width: 85%;
`;

const UserProfile = styled.Image`
  width: 48px;
  height: 48px;
  background-color: red;
  border-radius: 50;
`;

const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
`;

const UserNickName = styled.Text`
  font-size: 15px;
  margin-left: 8px;
  font-weight: bold;
`;

const UserInfoItem = styled.Text`
  font-size: 15px;
  margin-left: 4px;
  color: rgb(91, 112, 131);
`;

const UserContent = styled.View`
  width: 100%;
  margin-top: 1px;
  margin-left: 8px;
`;

const CardView = ({ id, text }: any) => {
  return (
    <CardViewWrapper>
      <UserProfile />
      <TwitWrapper>
        <UserInfo>
          <UserNickName>{id}</UserNickName>
          <UserInfoItem>@HakMoin</UserInfoItem>
          <UserInfoItem>·</UserInfoItem>
          <UserInfoItem>Mar 6</UserInfoItem>
        </UserInfo>
        <UserContent>
          <Text>{text}</Text>
        </UserContent>
      </TwitWrapper>
    </CardViewWrapper>
  );
};

export default CardView;
