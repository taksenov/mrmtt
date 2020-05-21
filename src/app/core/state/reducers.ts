import { combineReducers } from 'redux';

import { calculatePaymentsReducer } from '../../states/CalculatePayments/state/duck';

export default combineReducers({
  calculatePaymentsReducer,
});
