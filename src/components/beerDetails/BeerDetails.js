import React, { Component } from 'react';
import './BeerDetails.css';
import axios from 'axios';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

export default class BeerDetails extends Component {
  state = {
    beerDetails: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`
      )
      .then((response) => {
        console.log(response);
        this.setState({ beerDetails: response.data });
      });
  }
  render() {
    return (
      <div>
        <Header />
        <div id="details-main">
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={'/beers'}
          >
            Back To Beers!
          </Link>
          <div id="details-image">
            <img src={this.state.beerDetails.image_url} />
          </div>
          <div>
            <h2>{this.state.beerDetails.name}</h2>
            <h4>{this.state.beerDetails.tagline}</h4>
            <h4>Created By: {this.state.beerDetails.name}</h4>
            <h4>ABV: {this.state.beerDetails.abv}%</h4>
            <p>Description: {this.state.beerDetails.description}</p>
            <p>Food Pairing: {this.state.beerDetails.food_pairing}</p>
            <p>Brewer's Tips: {this.state.beerDetails.brewers_tips}</p>
          </div>
        </div>
      </div>
    );
  }
}
