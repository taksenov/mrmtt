import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

// Actions ==========================

const CALCULATE_PAYMENTS = 'CALCULATE_PAYMENTS';

// Получение результатов расчета
export const calculatePaymentsRequest = createAction(
  `${CALCULATE_PAYMENTS}/REQUEST`,
);
export const calculatePaymentsSuccess = createAction(
  `${CALCULATE_PAYMENTS}/SUCCESS`,
);
export const calculatePaymentsFailure = createAction(
  `${CALCULATE_PAYMENTS}/FAILURE`,
);

// Reducers ==========================

// Статус запроса списка
const isFetching = handleActions(
  {
    [calculatePaymentsRequest.toString()]: () => true,
    [calculatePaymentsSuccess.toString()]: () => false,
    [calculatePaymentsFailure.toString()]: () => false,
  },
  false,
);

// Успешно получен список
const list = handleActions(
  {
    [calculatePaymentsRequest.toString()]: () => [],
    [calculatePaymentsSuccess.toString()]: (_state, action) => action.payload,
  },
  [],
);

// Ошибка при получении списка
const errorList = handleActions(
  {
    [calculatePaymentsRequest.toString()]: () => [],
    [calculatePaymentsFailure.toString()]: (_state, action) => action.payload,
  },
  [],
);

// Root Reducer
const reducer = combineReducers({
  isFetching,
  list,
  errorList,
});

export default reducer;
