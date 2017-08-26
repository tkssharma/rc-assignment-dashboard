
import {
	REDUX_RESET_STATE,
	API_FEATCH_SUCCESS,
	API_FEATCH_ERROR,
	API_ACTIVE_DATA
} from './constants';
import {message, notification} from 'antd';
import axios from 'axios';

const url = ''

export function reduxResetState() {
	return {type: REDUX_RESET_STATE}
}
export function setCandidateData(data) {
	return {
		type: API_ACTIVE_DATA,
		payload: {
			data: data
		}
	}
}

export function getDashboardDataSuccess(data) {
	return {
		type: API_FEATCH_SUCCESS,
		payload: {
			data: data
		}
	}
}
export function getDashboardDataFailure(err) {
	return {
		type: API_FEATCH_ERROR,
		payload: {
			data: err
		}
	}
}

export function getDashboardData(_filters) {
	let URL = constructURL(_filters);
	return dispatch => {
		return axios
		.get(URL)
		.then((response) => {
			dispatch(getDashboardDataSuccess(response.data));
		})
		.catch((error) => {
			dispatch(getDashboardDataFailure(error));
			notification.warning({message: 'Error Occoured', description: error});
		});
	}
}

function constructURL(_filters){
	var query = {};
	if(Object.keys(_filters).length > 0){
		if(_filters.location && _filters.location.length > 0 ){
			query['location'] = `location=${_filters.location}`
		}
		if(_filters.name && _filters.name.length > 0 ){
			query['name'] = `name=${_filters.name}`
		}
		if(_filters.company && _filters.company.length > 0 ){
			query['company'] = `company=${_filters.company}`
		}
	}
	else {
		return '/api';
	}
	var _loc = query['location'] ? query['location'] : '';
	var _name = query['name'] ? query['name'] : '';
	var _company = query['company'] ? query['company'] : '';

	if(_loc && _name && _company) {
		  return `/api?${_loc}&${_name}&${_company}`;
	}else if(_name && _company){
		return `/api?${_name}&${_company}`;
	} else if(_name && _loc){
		return `/api?${_name}&${_loc}`;
	} else if (_company && _loc){
		return `/api?${_company}&${_loc}`;
	} else if (_company){
		return `/api?${_company}`;
	}else if (_loc){
		return `/api?${_loc}`;
	}else if (_name){
		return `/api?${_name}`;
	}
}
