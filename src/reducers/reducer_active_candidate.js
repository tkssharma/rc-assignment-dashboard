// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'API_ACTIVE_DATA':
    return action.payload.data;
  }
  return state;
}
