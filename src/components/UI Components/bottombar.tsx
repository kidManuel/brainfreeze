import React from 'react';
import { BottomBarContainer } from './styles';

interface BottomBarProps {
  children: React.ReactNode
}

export const BottomBar = ({ children }: BottomBarProps):React.ReactElement => (
  <BottomBarContainer hide={false}>
    {children}
  </BottomBarContainer>
);
