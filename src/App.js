import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

import { Address } from './Address/Address';
import { Users } from './Users/Users';


class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div id="users-block">
          <Users />
        </div>
        <div id="address-block">
          <Address />
        </div>
      </div>
    );
  }
}

export default App;
