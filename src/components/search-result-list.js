import React, { Component } from 'react';
import ResultListItem from './search-result-list-item';

class ResultList extends Component {
	constructor(props){
		super(props)
		this.fetchList = this.fetchList.bind(this);
	}
	fetchList(){
		if(Array.isArray(this.props.list)){
			return this.props.list.map((_candidate) => {
				return (
					<ResultListItem selectCandidate={this.props.selectCandidate} key={_candidate.name} candidate={_candidate} />
				);
			});
		}else{

		}
	}

	render(){
		return (
			<ul className="search-result-list">
			<li className="search-result-list-item">
			{
      this.fetchList()
			}
			</li>
			</ul>
		)
	}
};

export default ResultList;
