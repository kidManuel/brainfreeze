import React from 'react';
import { BarButton } from './styles';

export interface BottomBarButtonProps {
  onClickHandler?: () => void,
  children?: React.ReactNode | undefined
}

export const BottomBarButton = ({
  onClickHandler,
  children = null,
}: BottomBarButtonProps):React.ReactElement => (
  <BarButton onClick={onClickHandler}>
    {children}
  </BarButton>
);
