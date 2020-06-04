//these are use to minimize the error mistake

//count actions
export const DECREASE = 'DECREASE';
export const RESET = 'RESET';
export const INCREASE = 'INCREASE';

//modal actions
export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

//product actions
export const SET_LOADING = 'SET_LOADING';
export const GET_PRODUCTS = 'GET_PRODUCTS';

//action creators
export const setLoading = () => {
  return { type: SET_LOADING };
};
export const getProducts = () => {
  return async function (dispatch) {
    dispatch(setLoading());
    const response = await fetch(
      'https://johnsmilgatutorials.com/projects/react-tech-store-v2/products'
    );
    const data = await response.json();
    dispatch({ type: GET_PRODUCTS, payload: data });
  };
};
