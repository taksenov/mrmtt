import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { MainPageLayout } from '../../shared/layouts';
import ContainerLayout from '../../shared/layouts/ContainerLayout';
import PaymentsForm from './PaymentsForm/components/Form';

import { calculatePaymentsRequest } from '../../states/CalculatePayments/state/duck';
import {
  isFetching,
  list,
  error,
} from '../../states/CalculatePayments/state/selectors';

import styles from './CalculatePayments.module.scss';

// Store interface
export interface ICalculatePaymentsStore {
  isFetching: boolean;
  list: any;
  error: any;
}

// Dispatcher interface
export interface ICalculatePaymentsDispatch {
  calculatePaymentsRequest: (params: any) => void;
}

const mapStateToProps = (state: any) => ({
  isFetching: isFetching(state),
  list: list(state),
  error: error(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      calculatePaymentsRequest,
    },
    dispatch,
  );

type ICalculatePaymentsTypes = ICalculatePaymentsDispatch &
  ICalculatePaymentsStore;

class CalculatePayments extends React.Component<ICalculatePaymentsTypes> {
  handleSubmitData = (values: any) => {
    const { calculatePaymentsRequest } = this.props;

    calculatePaymentsRequest(values);
  };

  render() {
    const { isFetching, list, error } = this.props;

    console.log('RENDER isFetching=', isFetching);
    console.log('RENDER list=', list);
    console.log('RENDER error=', error);

    return (
      <div className={styles.container}>
        <MainPageLayout>
          {/* Content */}
          <MainPageLayout.Content>
            <ContainerLayout fluid>
              <PaymentsForm
                handleSubmitData={this.handleSubmitData}
                isFetching={isFetching}
              />
            </ContainerLayout>
          </MainPageLayout.Content>
        </MainPageLayout>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatePayments);
