import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props; // props
    return (
      <div>
        <h1>Card</h1>
        <div>
          <div data-testid="name-card">{ cardName }</div>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <div data-testid="description-card">{ cardDescription }</div>
          <div data-testid="attr1-card">{ cardAttr1 }</div>
          <div data-testid="attr2-card">{ cardAttr2 }</div>
          <div data-testid="attr3-card">{ cardAttr3 }</div>
          <div data-testid="rare-card">{ cardRare }</div>
          {cardTrunfo === true && (
            <span data-testid="trunfo-card">Super Trunfo</span>
          )}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
