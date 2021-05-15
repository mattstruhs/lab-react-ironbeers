import React, { Component } from 'react';
import '../home/Home.css';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <div id="main-div">
          <div className="home-container">
            <div className="image-div">
              <Link to={'/beers'}>
                <img src={require('../../assets/beers.png')} />
              </Link>
            </div>
            <div className="content-div">
              <h2>All Beers</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>

          <div className="home-container">
            <div className="image-div">
              <Link to={'/random-beer'}>
                <img src={require('../../assets/random-beer.png')} />
              </Link>
            </div>
            <div className="content-div">
              <h2>Random Beer</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>

          <div className="home-container">
            <div className="image-div">
              <Link to={'/new-beer'}>
                <img src={require('../../assets/new-beer.png')} />
              </Link>
            </div>
            <div className="content-div">
              <h2>New Beer</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
