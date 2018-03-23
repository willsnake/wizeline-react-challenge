import React, { Component } from 'react';

// Styles
import { AppContainer, Header, Content } from './AppStyles';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header>
          Awesome challenge
        </Header>
        <Content>
          Awesome Content
        </Content>
      </AppContainer>
    );
  }
}

export default App;
