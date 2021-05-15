import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './components/allBeers/AllBeers';
import NewBeer from './components/newBeer/NewBeer';
import RandomBeer from './components/randomBeer/RandomBeer';
import BeerDetails from './components/beerDetails/BeerDetails';


function App() {
  return (
    <>
      <div id="home-div">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={AllBeers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beers/:beerId" component={BeerDetails} /> 
          {/* we could pass the data down by using a render function here if we don't want to call the api again */}
        </Switch>
      </div>
    </>
  );
}

export default App;
