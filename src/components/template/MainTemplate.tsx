import React, { PropsWithChildren } from 'react';
import { Navbar } from '../organisms/Navbar/Navbar';
import { Wrapper } from './MainTemplate.style';

const MainTemplate = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
