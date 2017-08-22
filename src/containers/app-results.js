import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResultList from '../components/search-result-list';

import * as Action from '../actions';
class AppResults extends Component {
  constructor(props){
    super(props)
    this.selectedCandidate = this.selectedCandidate.bind(this);
  }
  selectedCandidate(_data){
    console.log(_data);
    this.props.setCandidateData(_data)
  }

  fetchList(){
    if(this.props.candidates){
      return (
        <div className="app-results">
          <ResultList selectCandidate={this.selectedCandidate}  list={this.props.candidates}/>
        </div>
      )
    }else{
      <h5>loading....</h5>
    }
  }
  render() {
    console.log('again....');
    return (
      <div className="result-container">
      <h5>showing x results</h5>
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
