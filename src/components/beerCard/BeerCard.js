import React, { Component } from 'react';
import './BeerCard.css';
import { Link } from 'react-router-dom';

export default class BeerCard extends Component {
  render() {
    return (
      <>
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/beers/${this.props._id}`}>
          <div id="beer-card">
            <div id="beer-image">
              <img src={this.props.imageUrl} />
            </div>
            <div id="beer-content">
              <h2>{this.props.name}</h2>
              <h4>{this.props.tagline}</h4>
              <h4>Created By: {this.props.name}</h4>
            </div>
          </div>
        </Link>
      </>
    );
  }
}
