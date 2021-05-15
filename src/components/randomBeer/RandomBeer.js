import React, { Component } from 'react';
import Header from '../header/Header';
import axios from 'axios';

export default class RandomBeer extends Component {
  state = {
    randomBeer: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((response) => {
      console.log(response);
        this.setState({ randomBeer: response.data });
    });
  }

  render() {
    console.log(this.state.randomBeer);
    return (
      <>
      <div>
        <Header />
        <div id="details-main">
          <div id="details-image">
            <img src={this.state.randomBeer.image_url} />
          </div>
          <div>
            <h2>{this.state.randomBeer.name}</h2>
            <h4>{this.state.randomBeer.tagline}</h4>
            <h4>Created By: {this.state.randomBeer.name}</h4>
            <h4>ABV: {this.state.randomBeer.abv}%</h4>
            <p>Description: {this.state.randomBeer.description}</p>
            <p>Food Pairing: {this.state.randomBeer.food_pairing}</p>
            <p>Brewer's Tips: {this.state.randomBeer.brewers_tips}</p>
          </div>
        </div>
      </div>
      </>
    );
  }
}
