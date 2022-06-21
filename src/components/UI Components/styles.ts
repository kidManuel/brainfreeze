import styled from 'styled-components';

interface BottomBarProps {
  hide: boolean,
}

export const BottomBarContainer = styled.div<BottomBarProps>`
    position: absolute;
    bottom: 0;
    right: 150px;
    display: flex;
    align-items: flex-end;
    transition: all 0.3s;
    transform: ${(props) => (props.hide ? 'translateY(100%)' : 'translateY(0%)')};
`;

interface BarButtonProps {
  background: string;
}

export const BarButton = styled.div<BarButtonProps>`
    background-color: #f0a868;
    color: white;
    font-weight: bold;
    display: flex;
    text-align: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 20px 30px;
    font-size: 40px;
    border: none;
    transition: all 0.3s;
    cursor: pointer;
    margin: 0 30px;
    width: 70px;
    height: 70px;
    background-image: ${(props) => `url("${props.background}")`};
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    &:hover {
        height: 100px;
    }
`;
