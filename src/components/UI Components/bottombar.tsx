import React from 'react';
import { BottomBarContainer } from './styles';

interface BottomBarProps {
  children: React.ReactNode,
  hide: boolean
}

export const BottomBar = ({ children, hide }: BottomBarProps):React.ReactElement => (
  <BottomBarContainer hide={hide}>
    {children}
  </BottomBarContainer>
);
