import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: CARD_DATA["cards"],
    };
  }

  listCards(cards) {
    const cardElements = cards.map((card, i) => {
      return (
        <Card
          key={i}
          {...card}
        />
      );
    });

    return cardElements;
  }
  

  render() {
    return (
      <div>
        <ul>
          { this.listCards(this.state.cards) }
        </ul>
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.object,
};

export default Board;
