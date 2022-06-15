import styled from 'styled-components';

interface BottomBarProps {
  hide: boolean,
}

export const BottomBarContainer = styled.div<BottomBarProps>`
    position: absolute;
    bottom: ${(props) => (props.hide ? '15px' : '0px')};
    right: 150px;
    display: flex;
    align-items: flex-end;
`;

export const BarButton = styled.div`
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
    &:hover {
        padding: 28px 30px;
    }
`;
