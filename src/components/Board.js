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
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}`)
    .then((response) => {
      this.setState({
        cards: response.data,
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }
  
  
  listCards(cards) {
    // console.log(cards)
    cards.forEach()
    
    
    
    
    let cardElements
    
    if (cards.length === 0 || cards === undefined) {
      return <p>no card</p>;
    }
    else {
      cardElements = cards.map((card, i) => {
        return (
          <Card
            key={i}
            {...card}
          />
        );
      });
    }

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
  boardName: PropTypes.string,
};

export default Board;
