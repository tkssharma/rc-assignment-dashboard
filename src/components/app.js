import React from 'react';
import { Component } from 'react';
import '../../style/style.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="filters">
          <h3>Candidate Search Filters <span className="applied-filters">applied filters ()</span></h3>
          <a className="filter-action">+ add filters</a>
          </div>
          <div className="search">
             <input className="field-control" type="text" />
          </div>
        </div>
        <div className="result-container">
        <h5>showing x results</h5>
          <div className="app-results">
            <ul className="search-result-list">
            <li className="search-result-list-item">
               <div className="profile">
                  <div className="profile-pic">
                     <img src="https://avatars1.githubusercontent.com/u/10391135?v=4&s=460" className="img-responsive" />
                  </div>
                  <div className="details">
                       <h3 className="details-name">Tkssharma</h3>
                  </div>

               </div>
            </li>
            </ul>
          </div>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}
