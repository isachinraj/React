import { 
  SIGN_IN, 
  SIGN_OUT, 
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from './types';

import streams from '../api/streams'
import history from '../history';

export const signIn = (userId) => {
  return{
    type: SIGN_IN,
    payload: userId
  };
  
};

export const signOut = () => {
  return{
    type: SIGN_OUT
  };
};

// export const streamCreate = (formValues) => {
//   return (dispatch) => {

//   }
// }

export const createStream = formValues => async ( dispatch, getState ) => {
  //Get state function is used to fetch the redux state
  //We need to fetch the userid form the state and create a new object with userid along with form data
  //UserId is required to filter and give edit/delete option to only the streams created by the user
  const {userId} = getState().auth;

  const response = await streams.post('/streams', {...formValues, userId});

  //dispacth the action to the reducers
  dispatch({ type: CREATE_STREAM, payload: response.data });

  history.push('/');

};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data })
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push('/');
};