import React, { Component } from 'react';

// Styles
import { AppContainer, Header, Content } from './HomeStyles';

class Home extends Component {
  componentWillMount() {}

  render() {
    return (
      <AppContainer>
        <Header>Awesome challenge</Header>
        <Content>Awesome Content</Content>
      </AppContainer>
    );
  }
}

export default Home;
