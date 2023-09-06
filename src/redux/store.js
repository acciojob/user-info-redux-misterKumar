// src/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  name: '',
  email: '',
};

// Reducer function
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.payload,
      };
    case 'UPDATE_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(userReducer);

export default store;
