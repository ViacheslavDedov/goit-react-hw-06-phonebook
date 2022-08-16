import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { actions } from './actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.delContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.chahgeFilter]: (_, { payload }) => payload,
});
export default combineReducers({
  items,
  filter,
});