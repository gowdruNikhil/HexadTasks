import React, { Component } from 'react';
import './App.css';
import Movies from './Components/MovieLists/MovieLists';

class App extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <p className="navbar-brand" >Navbar</p>
        </nav>
        <Movies />
      </>
    );
  }
}

export default App;
