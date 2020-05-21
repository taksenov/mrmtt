import { fork, all } from 'redux-saga/effects';

import { calculatePaymentsSaga } from '../../states/CalculatePayments/state/saga';

export default function* () {
  yield all([fork(calculatePaymentsSaga)]);
}
