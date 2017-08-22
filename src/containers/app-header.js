import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppHeader extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="filters">
        <h3>Candidate Search Filters <span className="applied-filters">applied filters ()</span></h3>
        <a className="filter-action">+ add filters</a>
        </div>
        <div className="search">
           <input className="field-control" type="text" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(AppHeader);
