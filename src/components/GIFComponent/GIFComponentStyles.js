import styled from 'styled-components';

const GIFComponentStyled = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.05, 1.07);
    -webkit-transition-timing-function: ease-out;
    -webkit-transition-duration: 250ms;
    -moz-transform: scale(1.05, 1.07);
    -moz-transition-timing-function: ease-out;
    -moz-transition-duration: 250ms;
  }
`;

export { GIFComponentStyled };
