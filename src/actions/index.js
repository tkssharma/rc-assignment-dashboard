
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

	return dispatch => {

		return axios
			.get('/api')
			.then((response) => {
				console.log(response.data);
				dispatch(getDashboardDataSuccess(response.data));
			})
			.catch((error) => {
				dispatch(getDashboardDataFailure(error));
				notification.warning({message: 'Error Occoured', description: error});
			});
	}
}
