import React from 'react';
import './styles.css';

interface BottomBarProps {
  children: React.ReactNode
}

export const BottomBar = ({ children }: BottomBarProps):React.ReactElement => <div>{children}</div>;
