import { DECREASE, RESET, INCREASE } from './actions';

const defaultState = {
  count: 0,
  name: 'Ravish',
};

//setup reducer :to update value of store
export default function reducer(state = defaultState, action) {
  //console.log({ state, action });

  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
    //don't change original
    //state make a copy of original make changes in it than return
  }
}
