import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResultList from '../components/search-result-list';
import {message, notification} from 'antd';

import * as Action from '../actions';
class AppResults extends Component {
  constructor(props){
    super(props)
    this.selectedCandidate = this.selectedCandidate.bind(this);
  }
  selectedCandidate(_data){
    this.props.setCandidateData(_data);
  }

  fetchList(){
    if(this.props.candidates && this.props.candidates.length > 0){
      return (
        <div>
        <h5>showing {this.props.candidates.length} results</h5>
        <div className="app-results">
        <ResultList selectCandidate={this.selectedCandidate}  list={this.props.candidates}/>
        </div>
        </div>
      )
    }else if(this.props.candidates && this.props.candidates.message){
      return (   <div> <h5>{this.props.candidates.message}</h5></div> );
    }else {
      return ( <div> <img className="loader" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" ></img></div> );
    }
  }
  render() {
    return (
      <div className="result-container">
      {this.fetchList()}
      </div>
    )
  }
  componentWillMount () {
    this.props.getDashboardData({});
  }
}


const mapStateToProps = ( state ) => {
  return {
    candidates: state.candidates
  }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    getDashboardData: (_filter) => dispatch( Action.getDashboardData(_filter) ),
    setCandidateData : (_data) => dispatch( Action.setCandidateData(_data) )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppResults);
