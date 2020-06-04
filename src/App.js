import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
//components
import Counter from './Counter';
import Modal from './Modal';
import Products from './Products';

//reducers
import countReducer from './countReducer';
import modalReducer from './modalReducer';
import productReducer from './productReducer';

const middleware = [thunk];
//setup store :to store data
//use comine reducers to combine& send reducer acc to their type
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

//actions

const App = () => {
  return (
    <Provider store={store}>
      <Counter />;
      <Modal />
      <Products />
    </Provider>
  );
};

export default App;
