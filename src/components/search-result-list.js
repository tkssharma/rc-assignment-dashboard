import React, { Component } from 'react';
import ResultListItem from './search-result-list-item';

class ResultList extends Component {
	constructor(props){
		super(props)
	}

	render(){

		let candidates;
		if(Array.isArray(this.props.list)){
			candidates  =  this.props.list.map((_candidate,index) => {
				return (
					<ResultListItem selectCandidate={this.props.selectCandidate} key={index} candidate={_candidate} />
				);
			});
		}else{
      candidates = <div className="displayData">no data found</div>
		}
		return (
			<ul className="search-result-list">
			<li className="search-result-list-item">
			{candidates}
			</li>
			</ul>
		)
	}
};

export default ResultList;
