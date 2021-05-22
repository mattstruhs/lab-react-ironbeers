import React, { Component } from 'react';
import Header from '../header/Header';
import axios from 'axios';
import './NewBeer.css';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    firstBrewed: '',
    brewersTips: '',
    attenuationLevel: 0,
    contributedBy: '',
  };

  updateInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmission = (e) => {
    this.setState(
      {
        name: '',
        tagline: '',
        description: '',
        firstBrewed: '',
        brewersTips: '',
        attenuationLevel: 0,
        contributedBy: '',
      },
      () => {
        axios
          .post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
          .then((response) => {
            console.log('response from new beer', response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    );
  };
  render() {
    console.log('check new beer state', this.state);
    return (
      <>
        <Header />
        <div id="new-beers-main">
          <form className="the-form" onSubmit={this.handleFormSubmission}>
            <p>Name</p>
            <input
              type="text"
              name="name"
              onChange={this.updateInput}
              value={this.state.name}
            />
            <p>Tagline</p>
            <input
              type="text"
              name="tagline"
              onChange={this.updateInput}
              value={this.state.tagline}
            />
            <p>Description</p>
            <input
              type="text"
              name="description"
              onChange={this.updateInput}
              value={this.state.description}
            />
            <p>First Brewed</p>
            <input
              type="text"
              name="firstBrewed"
              onChange={this.updateInput}
              value={this.state.firstBrewed}
            />
            <p>Brewer's Tips</p>
            <input
              type="text"
              name="brewersTips"
              onChange={this.updateInput}
              value={this.state.brewersTips}
            />
            <p>Attenuation Level</p>
            <input
              type="number"
              name="attenuationLevel"
              onChange={this.updateInput}
              value={this.state.attenuationLevel}
            />
            <p>Contributed By</p>
            <input
              type="text"
              name="contributedBy"
              onChange={this.updateInput}
              value={this.state.contributedBy}
            />
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
