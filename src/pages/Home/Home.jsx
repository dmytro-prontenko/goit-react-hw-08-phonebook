import React from 'react';
import { StyledBlurWrapper, StyledHeading, StyledHome, StyledText } from './Home.styled';

const Home = () => {
  return (
    <StyledHome>
      <StyledBlurWrapper/>
      <StyledHeading>Welcome to Phonebook! </StyledHeading>
      <StyledText>
        Create your own personal Phonebook with this app, which allows to view,
        to find and to save your contacts for never lose it!
      </StyledText>
    </StyledHome>
  );
};

export default Home;