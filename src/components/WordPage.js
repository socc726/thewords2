// src/components/WordPage.js
import React from 'react';
import { Link } from 'react-router';
import words from '../data/words';

export default class WordPage extends React.Component {
  render() {
    const id = this.props.params.id;
    console.log(id)
    const word = words.filter((word) => word._id === id)[0];
    console.log(word)

    const headerStyle = { backgroundImage: `url(${word.picture})` };
    return (
      <div className="athlete-full">
        
        <div >
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`${word.picture}`}/>
            <h2 className="name">{word.name}</h2>
          </div>
          <section className="description">
            {word.description}
            <p>Im with stupid</p>
          </section>
          <section className="medals">
            {word.type}

          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}