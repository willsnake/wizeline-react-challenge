import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
`;

const Header = styled.h1`
  border: 1px solid white;
  color: white;
  text-align: center;
  grid-column: 1 / 6;
  grid-row: 1;
`;
const Content = styled.div`
  border: 1px solid cyan;
  color: white;
  text-align: center;
  grid-column: 1 / 6;
  grid-row: 2 / 4;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
`;

const Footer = styled.div`
  border: 1px solid red;
  color: white;
  text-align: center;
  grid-column: 1 / 6;
  grid-row: 5;
`;

export { AppContainer, Header, Content, Footer };
