import { combineReducers } from 'redux';
import CandidatesReducer from './reducer_candidate';
import ActiveCandidate from './reducer_active_candidate';

const rootReducer = combineReducers({
   activeCandidate: ActiveCandidate ,
   candidates : CandidatesReducer
});

export default rootReducer;
