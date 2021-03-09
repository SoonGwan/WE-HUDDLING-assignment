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
  border-bottom-width: 2px;
`;

const TwitWrapper = styled.View`
  width: 85%;
`;

const UserProfile = styled.View`
  width: 48px;
  height: 48px;
  background-color: #f2f2f2;
  border-radius: 50;
`;

const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
`;

const UserNickName = styled.Text`
  width: 50%;
  height: 17px;
  border-radius: 8px;
  background-color: #f2f2f2;
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
  height: 50px;
  border-radius: 4px;
  background-color: #f2f2f2;
  margin-top: 5px;
  margin-left: 8px;
`;

const SocialTab = styled.View`
  width: 100%;
  height: 19px;
  border-radius: 4px;
  background-color: #f2f2f2;
  margin-left: 8px;
  margin-top: 8px;
`;

const SkeletonLoading = () => {
  return (
    <CardViewWrapper>
      <UserProfile />
      <TwitWrapper>
        <UserInfo>
          <UserNickName></UserNickName>
          <UserInfoItem></UserInfoItem>
        </UserInfo>
        <UserContent>
          <Text></Text>
        </UserContent>
        <SocialTab />
      </TwitWrapper>
    </CardViewWrapper>
  );
};

export default SkeletonLoading;
