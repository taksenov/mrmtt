import { createSelector } from 'reselect';

export const isFetching = (store: any) =>
  store.calculatePaymentsReducer.isFetching;

export const list = createSelector(
  (store: any) => store.calculatePaymentsReducer.list,
  list => list,
);

export const error = createSelector(
  (store: any) => store.calculatePaymentsReducer.error,
  error => error,
);
