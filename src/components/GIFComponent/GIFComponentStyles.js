import styled from 'styled-components';
import FaIconPack from 'react-icons/lib/fa';

const GIFComponentStyled = styled.div`
  width: ${props => props.width}px;
  min-height: ${props => props.height}px;
  padding-bottom: 10px;
  cursor: pointer;
  text-align: center;
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

const FavoriteContainer = styled.div`
  padding: 0 10px;
`;

const ButtonAddFavorite = styled.button`
  color: #ffffff;
  background: #3dd28d;
  overflow: hidden;

  margin: 10px;
  padding: 12px 12px;

  cursor: pointer;
  user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;

  color: #fff;
  border: 0 none;
  border-radius: 4px;

  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  justify-content: center;
  align-items: center;
  flex: 0 0 160px;

  box-shadow: 2px 5px 10px #e4e4e4;

  &:hover {
    transition: all 150ms linear;

    opacity: 0.85;
  }

  &:focus {
    outline: 1px dotted #959595;
    outline-offset: -4px;
  }
`;

const ButtonRemoveFavorite = styled.button`
  color: #ffffff;
  background: #f32c52;
  overflow: hidden;

  margin: 10px;
  padding: 12px 12px;

  cursor: pointer;
  user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;

  color: #fff;
  border: 0 none;
  border-radius: 4px;

  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  justify-content: center;
  align-items: center;
  flex: 0 0 160px;

  box-shadow: 2px 5px 10px #e4e4e4;

  &:hover {
    transition: all 150ms linear;

    opacity: 0.85;
  }

  &:focus {
    outline: 1px dotted #959595;
    outline-offset: -4px;
  }
`;

export { GIFComponentStyled, FavoriteContainer, ButtonAddFavorite, ButtonRemoveFavorite };
