import React from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from 'components/App.purs';

import logo from 'logo.svg';
import 'components/App.css';

const App = ({ count, increment, decrement }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <button onClick={ () => increment(1) }>+</button>
    <button onClick={ () => decrement(2) }>-</button>
    <div>{ count }</div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

