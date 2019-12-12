import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
const Emoji = require("emoji-dictionary");

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    const { text, emoji } = this.props.card;
    // const viewEmoji = emoji.getUnicode(`${cardEmoji}`)
    // console.log(emoji.getUnicode(`${cardEmoji}`));

    return (
      <div className="card">
        <section className="card__content">
          <p className="card__content-text">{ text }</p>
          <p className="card__content-emoji">{ Emoji.getUnicode(`${emoji}`) }</p>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  cards: PropTypes.array,
};

export default Card;
