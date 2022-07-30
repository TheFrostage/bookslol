import React from 'react';
import {Provider} from 'react-redux';

import {generateStore} from './src/store';
import Router from './src/navigation';
import './src/services';

const store = generateStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
