import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import { GIFComponentStyled } from './GIFComponentStyles';

class GIFComponent extends Component {
  render() {
    const { onClick, gifData } = this.props;

    return (
      <GIFComponentStyled
        id={gifData.id}
        onClick={onClick}
        width={gifData.images.fixed_height_small.width}
        height={gifData.images.fixed_height_small.height}
      >
        <img src={gifData.images.fixed_height_small.url} />
      </GIFComponentStyled>
    );
  }
}

GIFComponent.propTypes = {
  onClick: PropTypes.func,
  gifData: PropTypes.object.isRequired,
  id: PropTypes.string
};

export default GIFComponent;
