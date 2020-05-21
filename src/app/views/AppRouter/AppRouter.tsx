import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CalculatePaymentsLoadable from '../CalculatePayments';

class AppRouter extends React.Component<any, any> {
  componentDidMount() {
    // IDEA: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', this.setHeightForMobilePhone);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setHeightForMobilePhone);
  }

  setHeightForMobilePhone = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  render() {
    return (
      <>
        <Switch>
          <Route
            path="/calculate-payments"
            component={CalculatePaymentsLoadable}
          />
          <Redirect to="/calculate-payments" />
        </Switch>
      </>
    );
  }
}

export default AppRouter;
