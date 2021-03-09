import React from 'react';
import styled from 'styled-components/native';

const SocialTabWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-left: 8px;
`;

const SocialItem = styled.Image`
  width: 19px;
  height: 19px;
`;

const SocialTab = () => {
  return (
    <SocialTabWrapper>
      <SocialItem source={require('../../../icon/icons8-chat-bubble-19.png')} />
      <SocialItem source={require('../../../icon/icons8-retweet-19.png')} />
      <SocialItem source={require('../../../icon/icons8-heart-19.png')} />
      <SocialItem source={require('../../../icon/icons8-upload-19.png')} />
    </SocialTabWrapper>
  );
};

export default SocialTab;
