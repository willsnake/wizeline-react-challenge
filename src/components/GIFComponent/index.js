import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Connect
import Connect from '../../util/connect';

// Styles
import {
  GIFComponentStyled,
  FavoriteContainer,
  ButtonAddFavorite,
  ButtonRemoveFavorite
} from './GIFComponentStyles';

class GIFComponent extends Component {
  constructor() {
    super();
    this.handleFavoriteChange = this.handleFavoriteChange.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
  }

  renderHeart(id) {
    const { appState: { favoriteGifs } } = this.props;
    const checkFavorite = favoriteGifs.find(fav => {
      return fav === id;
    });
    if (checkFavorite === undefined) {
      return (
        <ButtonAddFavorite id={id} onClick={this.handleFavoriteChange} color={'white'}>
          Add
        </ButtonAddFavorite>
      );
    } else {
      return (
        <ButtonRemoveFavorite id={id} onClick={this.handleFavoriteChange}>
          Remove
        </ButtonRemoveFavorite>
      );
    }
  }

  handleFavoriteChange(event) {
    const { handleFavoriteChangeAction } = this.props;
    handleFavoriteChangeAction(event.target.id);
  }

  render() {
    const { onClick, gifData } = this.props;

    return (
      <GIFComponentStyled
        id={gifData.id}
        onClick={onClick}
        width={gifData.images.fixed_height_small.width}
        height={gifData.images.fixed_height_small.height}
      >
        <img id={gifData.id} alt={gifData.title} src={gifData.images.fixed_height_small.url} />
        <FavoriteContainer>{this.renderHeart(gifData.id)}</FavoriteContainer>
      </GIFComponentStyled>
    );
  }
}

GIFComponent.propTypes = {
  onClick: PropTypes.func,
  gifData: PropTypes.object.isRequired,
  id: PropTypes.string,
  appState: PropTypes.object.isRequired,
  handleFavoriteChangeAction: PropTypes.func.isRequired
};

let gIFComponent = Connect(GIFComponent);
export default gIFComponent;
