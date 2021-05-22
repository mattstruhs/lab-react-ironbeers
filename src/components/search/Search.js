import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  search = (e) => {
    console.log('search bar', e.target.value);
    this.props.executeSearch(e.target.value);
  };

  render() {
    return (
      <div>
        <input onChange={this.search} className="input" type="text" />
      </div>
    );
  }
}
