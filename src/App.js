import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import RenderCard from './components/RenderCard'; // importa componentes

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      isBtnDesable: true,
      trunfo: false,
      hasTrunfo: false,
      deck: [],
      filterCard: '',
      rareChange: '',
      checkboxCardName: '',
      checkfilterTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { value, name, checked } = target;
    this.setState({
      [name]: name === 'trunfo' ? checked : value,
    }, this.validationsForm);
  }

  validationsForm = () => {
    const { name, description, attr1, attr2, attr3, image, rare } = this.state;
    const SUM_MIN_VALUE = 210;
    const VALUE_MAX_ATTR = 90; // valor maximo
    const VALUE_MIN_ATTR = 0;

    const arrayVerify = [name, description, attr1, attr2, attr3, image, rare];
    const checkImputsEmpty = arrayVerify.every((elementState) => elementState !== '');

    const arrayAttrs = [parseFloat(attr1), parseFloat(attr2), parseFloat(attr3)];
    const sumArrayAttrs = arrayAttrs.reduce((acc, attr) => acc + attr, 0);
    const checkMaxSumAttrs = sumArrayAttrs <= SUM_MIN_VALUE;

    const checkAttr = arrayAttrs.every((attr) => attr <= VALUE_MAX_ATTR
    && attr >= VALUE_MIN_ATTR);

    const isFormValid = checkImputsEmpty
    && checkMaxSumAttrs
    && checkAttr;
    this.setState({
      isBtnDesable: isFormValid !== true,
    });
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
    } = this.state;

    const card = { name, description, attr1, attr2, attr3, image, rare, trunfo };
    this.setState((prevState) => ({ deck: [...prevState.deck, card] }));

    this.setState(({ deck }) => ({
      hasTrunfo: deck.some((cardElement) => cardElement.trunfo === true),
    }));

    this.setState(() => ({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      isBtnDesable: true,
    }));
  }

  deleteCard = (indexCard) => {
    const { deck } = this.state;
    const removeCard = deck.filter((card, index) => {
      if (card.trunfo === true) {
        this.setState({ hasTrunfo: false });
      }
      return index !== indexCard;
    });
    this.setState(() => ({ deck: [...removeCard] }));
  }

  handleChange = ({ target }) => {
    this.setState({
      filterCard: target.value,
      rareChange: target.value,
    });
  }

  checkboxChange = () => {
    const { deck, checkfilterTrunfo } = this.state;
    this.setState({ checkfilterTrunfo: !checkfilterTrunfo });

    deck.filter((e) => {
      if (e.trunfo === true) {
        this.setState({ checkboxCardName: e.name });
      }
      return console.log('trunfo false');
    });
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      isBtnDesable,
      hasTrunfo,
      deck,
      filterCard,
      rareChange,
      checkboxCardName,
      checkfilterTrunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ isBtnDesable }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
        <RenderCard
          deck={ deck }
          deleteCard={ this.deleteCard }
          handleChange={ this.handleChange }
          filterCard={ filterCard }
          cardRareChange={ rareChange }
          checkboxChange={ this.checkboxChange }
          checkboxCardName={ checkboxCardName }
          checkfilterTrunfo={ checkfilterTrunfo }
        />
      </div>
    );
  }
}
export default App;
