import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../actions';

class AppHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      'filter' : {
        'company' :'',
         'location' : '',
         'name' : ''
      },
      'applyFilter' : true
    }
    this.toggleFilters = this.toggleFilters.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  toggleFilters(){
    this.setState({'applyFilter' : ! this.state.applyFilter});
     // if applyFilter is false than remove filters from api
    if(this.state.applyFilter){
      this.setState({'filter' : {} });
      //this.props.getDashboardData();
    }
  }
  handleChange(e){
    console.log(e.target.value);
    switch(e.target.id){
      case 'name' :
      this.state.filter = {'company' : this.state.filter.company, 'location' : this.state.filter.location,
      'name' : e.target.value};
      break;

      case 'location' :
      this.state.filter = {'company' : this.state.filter.company, 'location' : e.target.value ,'name' : this.state.filter.name};
      break;

      case 'company' :
      this.state.filter = {'location' : this.state.filter.location, 'company' : e.target.value ,'name' : this.state.filter.name};
      break;
    }
    this.setState({'filter' : this.state.filter });
    //this.props.getDashboardData(this.state.filter);
  }

  render() {
    return (
      <div className="app-header">
        <div className="filters">
        <h3>Candidate Search Filters <span className="applied-filters">applied filters ()</span></h3>
        <h5 className="filter-label">showing candidate from {this.state.filter.company} {this.state.filter.location}</h5>
        <span onClick={this.toggleFilters} className="filter-action">
        {this.state.applyFilter ? 'Remove Filters' : 'Add Filters' }</span>
          { this.state.applyFilter ? (
          <div className="select-filters">
              <select onChange={this.handleChange} className="field-control" id="location">
              <option>loc1</option>
              <option>loc2</option>
              <option>loc3</option>

              </select>
               <select onChange={this.handleChange}  className="field-control" id="company">
               <option>coc1</option>
               <option>coc2</option>
               <option>coc3</option>
              </select>
           </div>

          ) : '' }
        </div>
        <div className="search">
           <input placeholder="sort by name" id="name" className="field-control" type="text" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = ( dispatch, ownProps ) => {
	return {
		getDashboardData: (_filter) => dispatch( Action.getDashboardData(_filter) )
	}
}

export default connect(mapDispatchToProps)(AppHeader);
