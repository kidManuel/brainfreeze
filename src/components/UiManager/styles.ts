import styled from 'styled-components';

export const UiManager = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    pointer-events: none;
    & > * {
        pointer-events: all;
    }
`;
