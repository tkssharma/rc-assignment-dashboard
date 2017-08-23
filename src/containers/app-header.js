import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../actions';

class AppHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter : {
        'company' :'',
         'location' : ''
      },
      applyFilter : false
    }
    this.toggleFilters = this.toggleFilters.bind(this);
  }
  toggleFilters(){
    this.setState({'applyFilter' : ! this.state.applyFilter});
  }
  render() {
    return (
      <div className="app-header">
        <div className="filters">
        <h3>Candidate Search Filters <span className="applied-filters">applied filters ()</span></h3>
        <a onClick={this.toggleFilters} className="filter-action">+ add filters</a>
          { this.state.applyFilter ? (<input type="text" className="field-control"/> ) : '' }
        </div>
        <div className="search">
           <input className="field-control" type="text" />
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
