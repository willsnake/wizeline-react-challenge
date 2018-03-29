import styled from 'styled-components';

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
`;

const Content = styled.div`
  color: white;
  text-align: center;
  grid-column: 1 / 6;
  grid-row: 2 / 4;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
`;

export { HomeContainer, Content };
