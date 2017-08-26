import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResultList from '../components/search-result-list';
import {message, notification} from 'antd';
import Model from '../components/model';

import * as Action from '../actions';
class AppResults extends Component {

  constructor(props){
    super(props)
    this.state = { 'model' : false}
    this.selectedCandidate = this.selectedCandidate.bind(this);
    this.closeModel = this.closeModel.bind(this);
  }
  selectedCandidate(_data){
    this.props.setCandidateData(_data);
    this.setState({'model' : true});
  }
  closeModel(){
    this.setState({'model' : false});
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
  fetchActive(){
    if(this.props.activeCandidate){
      return (<Model closeModel={this.closeModel} show={this.state.model} data ={this.props.activeCandidate}/>)
    }
  }
  render() {
    return (
      <div className="result-container">
      {this.fetchList()}
      {this.fetchActive()}
      </div>
    )
  }
  componentWillMount () {
    this.props.getDashboardData({});
  }
}


const mapStateToProps = ( state ) => {
  return {
    candidates: state.candidates,
    activeCandidate : state.activeCandidate
  }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    getDashboardData: (_filter) => dispatch( Action.getDashboardData(_filter) ),
    setCandidateData : (_data) => dispatch( Action.setCandidateData(_data) )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppResults);
