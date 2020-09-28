import React, { Component } from 'react';
import './App.css';
import { getAllStarships } from './services/sw-api';

class App extends Component {

  state = {
    starships: []
  };

  async componentDidMount() {
    const starships = await getAllStarships();
    this.setState({ starships: starships.results });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Star Wars</h1>
        </header>
        <section>
          {this.state.starships.map(starship =>
            <button>{starship.name}</button>
            )}
        </section>
      </div>
  )};
}

export default App;
