import React, { Component } from 'react';
import ResultListItem from './search-result-list-item';

const resultList = function(props) {
	return (
		<ul className="search-result-list">
		 <li className="search-result-list-item">
         <ResultListItem />
		 </li>
		</ul>
	)
};

export default resultList;
