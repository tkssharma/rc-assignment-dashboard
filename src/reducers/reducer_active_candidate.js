// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case  'API_FEATCH_ERROR':
    if( action.payload){
      return action.payload.data;
    }
    case  'API_FEATCH_SUCCESS':
    if( action.payload){
      return action.payload.data;
    }
  }
  return state;
}
