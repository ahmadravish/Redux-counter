import React from 'react';
import Counter from './Counter';
import { createStore } from 'redux';
import { DECREASE, RESET, INCREASE } from './actions';
import reducer from './reducers';

//setup initial state
const defaultState = {
  count: 54,
  name: 'Ravish',
};

//setup store :to store data
const store = createStore(reducer, defaultState);

//action
store.dispatch({ type: RESET });
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });

const App = () => {
  return <Counter state={store.getState()} />;
};

export default App;
