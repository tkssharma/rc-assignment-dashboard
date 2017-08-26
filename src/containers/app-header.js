import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../actions';
import {debounce} from 'throttle-debounce';


class AppHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      'filter' : {
        'company' : null,
         'location' : null,
         'name' : null
      },
      'applyFilter' : true,
      'filterCount' : 0
    }
    this.toggleFilters = this.toggleFilters.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  toggleFilters(){
    this.setState({'applyFilter' : ! this.state.applyFilter});
     // if applyFilter is false than remove filters from api
    if(this.state.applyFilter){
      this.setState({'filter' : {} });
      this.props.getDashboardData({});
    }
  }
  handleChange(e){
    var _count = 0;
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

    Object.getOwnPropertyNames(this.state.filter ).forEach(function(_props){
      if(this.state.filter[_props]){
        _count ++;
      }
    }.bind(this));
    this.setState({'filter' : this.state.filter , 'filterCount' : _count});
    debounce(1000,this.props.getDashboardData(this.state.filter));
  }

  render() {
    return (
      <div className="app-header">
        <div className="filters">
        <h3>Candidate Search Filters <span className="applied-filters">applied filters ({this.state.filterCount})</span></h3>
        <h5 className="filter-label">showing candidate from {this.state.filter.company} | {this.state.filter.location}
        <span onClick={this.toggleFilters} className="filter-action">
        {this.state.applyFilter ? '(Remove Filters)' : '(Add Filters)' }</span>

        </h5>


        { this.state.applyFilter ? (
          <div className="select-filters">
              <select onChange={this.handleChange} value={this.state.filter.location || ''} className="field-control" id="location">
							<option></option>
              <option>Bangalore</option>
              <option>Gurgaon</option>
              <option>Delhi</option>
              <option>Goa</option>
              <option>Mumbai</option>

              </select>
               <select onChange={this.handleChange} value={this.state.filter.company || ''}  className="field-control" id="company">
							 <option></option>
               <option>IBM</option>
               <option>MS</option>
               <option>Mckinsey</option>
               <option>Amdocs</option>
               <option>UHG</option>
              </select>
           </div>) : '' }


        </div>
        <div className="search">
           <input placeholder="sort by name" id="name" className="field-control" type="text" onChange={this.handleChange}  />
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = ( dispatch, ownProps ) => {
	return {

		getDashboardData: function(_filter) {
			return dispatch( Action.getDashboardData(_filter))
		}
	}
}
const mapStateToProps = ( state ) => {
	return {
		candidates: state.candidates
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(AppHeader);
