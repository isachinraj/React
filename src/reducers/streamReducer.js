import _ from 'lodash';

import { 
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';

//Creating reducer using array based approach

// export default (state=[], action) => {
//   switch (action.type) {
//     case EDIT_STREAM:

//       state.map( stream => {
//         if(stream.id == action.payload.id) {
//           return action.payload;
//         }else{
//           return stream;
//         }
//       });

//     default:
//       return state;

//   }
// }


// Object based approach

// export default ( state={}, action) => {
//   switch(action.type) {
//     case EDIT_STREAM:

//       // const newState = { ...state }
//       // newState[action.paylod.id] = action.payload;
//       // return newState;
      
//       //simple es5 syntax
//       //In the new state object, create a new key with the payload id(or update the exixting key) and add the payload to that key
//       return { ...state, [action.payload.id]: action.payload };

//     default:
//       return state;

//   }
// }

export default (state={}, action) => {
  switch(action.type) {

    case FETCH_STREAMS:
      //loadash mapKeys function will return the new object by making the id property of the payload as the new object keys.
      //now the new object is spread using ... to create a new state object
      
      return {...state, ..._.mapKeys(action.payload, 'id') };

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
      
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    
    case DELETE_STREAM:
      //deletes the key from the state returning the new state object
      //action.payload return the key id not the complete payload like fetch and edit
      return _.omit(state, action.payload);

    default:
      return state;

  }
};
