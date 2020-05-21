import { takeLatest, put, call } from 'redux-saga/effects';

import { calcPayments } from '../../../../services/CalculatePayments/api';

import {
  calculatePaymentsRequest,
  calculatePaymentsSuccess,
  calculatePaymentsFailure,
} from '../duck';

// Sagas

export function* getRecords(action: any): IterableIterator<any> {
  const { payload } = action;

  console.log('SAGA action=', action);

  try {
    const serverResponse: any = yield call(calcPayments.getData, {
      params: { ...payload },
    });
    const { status, data } = serverResponse;

    console.log('SAGA serverResponse=', serverResponse);
    console.log('SAGA status=', status);

    if (status === 200) {
      yield put({
        type: calculatePaymentsSuccess.toString(),
        payload: { ...data },
      });
    }

    if (status === 400) {
      yield put({
        type: calculatePaymentsFailure.toString(),
        payload: { ...data },
      });
    }

    if (status === 404) {
      yield put({
        type: calculatePaymentsFailure.toString(),
        payload: { ...data },
      });
    }
  } catch (error) {
    if (error) {
      console.log('[ERROR AdminUsers getRecords]:', error);
      yield put({
        type: calculatePaymentsFailure.toString(),
        payload: { error },
      });
    }
  }
} // getRecords =========

// Root Saga
export default function* rootSaga() {
  yield takeLatest(calculatePaymentsRequest, getRecords);
}
