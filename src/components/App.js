import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import UserInfo from './UserInfo';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UserInfo />
      </div>
    </Provider>
  );
};

export default App;
