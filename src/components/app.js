import React from 'react';
import { Component } from 'react';
import '../../style/style.scss';
import AppHeader from '../containers/app-header';
import AppResults from '../containers/app-results';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <AppResults />
        <div className="footer">
        </div>
      </div>
    );
  }
}
