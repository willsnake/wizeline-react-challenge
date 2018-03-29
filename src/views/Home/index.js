import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { GIFComponent, Header } from '../../components';

// Connect
import Connect from '../../util/connect';

// Styles
import { HomeContainer, Content } from './HomeStyles';

class Home extends Component {
  constructor() {
    super();
    this.searchFunction = this.searchFunction.bind(this);
  }
  componentWillMount() {
    const { appState: { filter }, fetchTrendingGifsAction } = this.props;
    fetchTrendingGifsAction(filter);
  }

  searchFunction(event) {
    const { searchGIFAPIAction } = this.props;
    searchGIFAPIAction(event.target.value);
  }

  render() {
    const { appState: { gifs } } = this.props;
    return (
      <HomeContainer>
        <Header {...this.props} searchFunction={this.searchFunction} />
        <Content>
          {gifs.length > 0 ? (
            gifs.map(gif => <GIFComponent key={gif.id} id={gif.id} gifData={gif} />)
          ) : (
            <div style={{ color: 'white' }}>Loading</div>
          )}
        </Content>
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  appState: PropTypes.object.isRequired,
  fetchTrendingGifsAction: PropTypes.func.isRequired,
  searchGIFAPIAction: PropTypes.func.isRequired
};

let home = Connect(Home);
export default home;
