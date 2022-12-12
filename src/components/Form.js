import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2, // atributo 2
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="textarea"
            name="description"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1:
          <input
            type="number"
            name="attr1"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Atributo 2:
          <input
            type="number"
            name="attr2"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3:
          <input
            type="number"
            name="attr3"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            type="text"
            name="image"
            id="image"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare">
          Raridade:
          <select
            name="rare"
            id="rare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <optgroup label="Selecione">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </optgroup>
          </select>
        </label>

        {hasTrunfo === true ? (
          <p>Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <label htmlFor="trunfo">
            Super Trunfo
            <input
              type="checkbox"
              name="trunfo"
              id="trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
            />
          </label>
        )}

        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
