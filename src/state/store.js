import { createStore, applyMiddleware } from 'redux';
import { Initial } from 'state/actions';
import { rootReducer } from 'state/reducer';

/**
 * Pass data into the purescript reducer
 * @param { Object } state
 * @param { Object } action
 */
const reducer = (state, action) => (
  state === undefined
    ? rootReducer (Initial.value) ({})
    : rootReducer (action.data) (state)
);

/**
 * Transform purescript action into a standard action
 * @param { Object } state
 * @param { Object } action
 */
const middleware = store => next => action => (
  next({
    type: action.constructor.name,
    data: action
  })
);

export default () => createStore(reducer, applyMiddleware(
  middleware
));
