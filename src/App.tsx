import React from 'react';
import { Provider } from 'react-redux';
import { Mainpage } from './components';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <Mainpage />
  </Provider>
);

export default App;
