import React, { Component } from 'react';
import '../allBeers/AllBeers.css';
import Header from '../header/Header';
import axios from 'axios';
import BeerCard from '../beerCard/BeerCard';
import Search from '../search/Search';

export default class AllBeers extends Component {
  state = {
    allBeers: [],
    visibleBeers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log(response);
      this.setState({
        allBeers: response.data,
        visibleBeers: response.data,
      });
    });
  }

  filterResults = (searchTerm) => {
    const copy = [...this.state.allBeers];
    const filteredResults = copy.filter((beerObject) => {
      return beerObject.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    this.setState({ visibleBeers: filteredResults });
  };
  render() {
    return (
      <>
        <Header />
        <Search executeSearch={this.filterResults} />
        <div id="all-beers-main">
          {this.state.visibleBeers.map((beer) => {
            return (
              <BeerCard {...beer} key={beer._id} imageUrl={beer.image_url} />
            );
          })}
        </div>
      </>
    );
  }
}
