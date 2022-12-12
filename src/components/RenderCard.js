import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderCard extends Component {
  render() {
    const {
      deck,
      deleteCard,
      handleChange,
      filterCard,
      cardRareChange,
      checkboxChange,
      checkfilterTrunfo,
    } = this.props;

    const filterDeck = deck.filter((card) => {
      const cardNameLower = card.name.toLocaleLowerCase();
      const searchLower = filterCard.toLocaleLowerCase();
      const cardSelectLower = card.rare.toLocaleLowerCase();
      const selectLower = cardRareChange.toLocaleLowerCase();
      const boolCardCheckBox = card.trunfo;
      if (checkfilterTrunfo === true) {
        return boolCardCheckBox;
      }
      return cardNameLower.includes(searchLower)
        || cardSelectLower === selectLower
        || selectLower === 'todas';
    });

    return (
      <div>
        <h1>Deck</h1>
        <section>
          <h4>Filtro de busca</h4>
          <label htmlFor="filterName">
            <input
              type="text"
              data-testid="name-filter"
              name="filterName"
              id="filterName"
              placeholder="Busca por nome"
              onChange={ handleChange }
            />
          </label>

          <label htmlFor="filterRare">
            Raridade:
            <select
              name="filterRare"
              id="filterRare"
              data-testid="rare-filter"
              value={ cardRareChange }
              onChange={ handleChange }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="filterTrunfo">
            Super Trunfo
            <input
              type="checkbox"
              name="filterTrunfo"
              id="filterTrunfo"
              checked={ checkfilterTrunfo }
              onChange={ checkboxChange }
              data-testid="trunfo-filter"
            />
          </label>
          <button type="submit">Buscar</button>
        </section>

        <section>
          {filterDeck && (
            filterDeck.map(({ name,
              description,
              attr1,
              attr2,
              attr3,
              image,
              rare,
              trunfo,
            }, index) => (
              <div key={ index }>
                <div>{ name }</div>
                <img src={ image } alt={ name } />
                <div>{ description }</div>
                <div>{ attr1 }</div>
                <div>{ attr2 }</div>
                <div>{ attr3 }</div>
                <div>{ rare }</div>
                <div>{ trunfo }</div>
                <button
                  type="submit"
                  onClick={ () => deleteCard(index) }
                  data-testid="delete-button"
                >
                  Excluir
                </button>
              </div>
            ))
          )}
        </section>
      </div>
    );
  }
}

RenderCard.propTypes = {
  deck: PropTypes.array,
}.isRequired;
// proptypes do renderCard
export default RenderCard;
