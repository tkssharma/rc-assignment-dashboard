import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResultList from '../components/search-result-list';

class AppResults extends Component {

  render() {
    return (
      <div className="result-container">
      <h5>showing x results</h5>
        <div className="app-results">
          <ResultList />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  };
}

// on the BookList container
function mapDispatchToProps(dispatch) {
  // to all of our reducers
  return null;
  //return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppResults);
