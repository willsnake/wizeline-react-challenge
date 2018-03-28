import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { RowContainer, GIFComponent } from '../../components';

// Connect
import Connect from '../../util/connect';

// Styles
import { AppContainer, Header, Footer, Content } from './HomeStyles';

class Home extends Component {
  componentWillMount() {
    const { appState: { filter }, fetchTrendingGifsAction } = this.props;
    fetchTrendingGifsAction(filter);
  }

  render() {
    const { appState: { gifs } } = this.props;
    return (
      <AppContainer>
        <Header>Awesome challenge</Header>
        <Content>
          {gifs.length > 0 ? (
            gifs.map(gif => <GIFComponent key={gif.id} id={gif.id} gifData={gif} />)
          ) : (
            <div style={{ color: 'white' }}>Loading</div>
          )}
        </Content>
        <Footer>Awesome Footer</Footer>
      </AppContainer>
    );
  }
}

Home.propTypes = {
  appState: PropTypes.object.isRequired,
  fetchTrendingGifsAction: PropTypes.func.isRequired
};

let home = Connect(Home);
export default home;
