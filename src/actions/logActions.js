import {
  GET_LOGS, 
  SET_LOADING, 
  LOGS_ERROR, 
  ADD_LOG, 
  SEARCH_LOGS,
  UPDATE_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';

export const addLog = (log) => async (dispatch) => {
  try {  
    setLoading()
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data
    });  
  } catch(err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

export const getLogs = () => async (dispatch) => {
  try {  
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    })
  }catch(err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    })
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {  
    setLoading();
     await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_LOG,
      payload: id
    });

  } catch(err) {
    console.log(err);
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    })
  }
};

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
export const updateLog = (log) => async (dispatch) => {
  try {  
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      header: {
        'Content-type': 'application/json',
      }
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data
    });

  } catch(err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    })
  }
};

export const searchLogs = (text) =>  async (dispatch) => {
  try {  
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    console.log(data);
    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });

  } catch(err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err
    })
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
