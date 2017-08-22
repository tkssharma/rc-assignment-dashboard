import { combineReducers } from 'redux';
import CandidatesReducer from './reducer_candidate';
import ActiveCandidate from './reducer_active_candidate';

const rootReducer = combineReducers({
  candidates: ActiveCandidate ,
  activeCandidate: CandidatesReducer
});

export default rootReducer;
