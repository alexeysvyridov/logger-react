import {
  GET_LOGS, 
  SET_LOADING, 
  LOGS_ERROR, 
  ADD_LOG,
  UPDATE_CURRENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_LOG
} from '../actions/types';
const initialState = {
  logs:null,
  current: null,
  loading: false,
  error: null
};
export default (state = initialState, action) => {
  switch(action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id  !== action.payload),
        loading: false
      }
    case UPDATE_CURRENT:
      return {
        ...state,
        logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
      } 
    case SET_CURRENT: 
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};