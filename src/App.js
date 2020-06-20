import React from 'react';
import SearchAlgorithms from './SearchAlgorithms'
import './App.css';

export default class App extends React.Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <main className="textbox">
            <SearchAlgorithms />
          </main>
        </header>
      </div>
    );
  }
}
