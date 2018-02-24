import React, { Component } from 'react';
import ButtonAppBar from '../Top-Nav/index';
import Home from '../Home/index';
class App extends Component {
  render() {
    return (
    <div>
         <ButtonAppBar />
         <Home />
    </div>
    );
  }
}

export default App;
