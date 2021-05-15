import React, { Component } from 'react';
import '../allBeers/AllBeers.css';
import Header from '../header/Header';
import axios from 'axios';
import BeerCard from '../beerCard/BeerCard';

export default class AllBeers extends Component {
  state = {
    allBeers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log(response);
      this.setState({ allBeers: response.data });
    });
  }

  render() {
    return (
      <>
        <Header />
        <div id="all-beers-main">
          {this.state.allBeers.map(beer => {
            return <BeerCard {...beer} key={beer._id} imageUrl={beer.image_url} />;
          })}
        </div>
      </>
    );
  }
}
