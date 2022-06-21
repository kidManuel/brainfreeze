import React from 'react';
import { BarButton } from './styles';

export interface BottomBarButtonProps {
  onClickHandler?: () => void,
  children?: React.ReactNode | undefined,
  background: string
}

export const BottomBarButton = ({
  onClickHandler,
  background,
  children = null,
}: BottomBarButtonProps):React.ReactElement => (
  <BarButton background={background} onClick={onClickHandler}>
    {children}
  </BarButton>
);
