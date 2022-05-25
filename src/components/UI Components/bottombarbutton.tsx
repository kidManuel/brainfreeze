import React from 'react';

export interface BottomBarButtonProps {
  onClickHandler: () => void,
  children?: React.ReactNode | undefined
}

export const BottomBarButton = ({
  onClickHandler,
  children = null,
}: BottomBarButtonProps):React.ReactElement => (
  <button type="button" className="barButton" onClick={onClickHandler}>
    {children}
  </button>
);
