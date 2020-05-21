import React, { Suspense, lazy } from 'react';
import { Loader } from 'semantic-ui-react';

import { MainPageLayout } from '../../shared/layouts';

// Preloader for Suspense
const PreLoader = () => {
  return (
    <MainPageLayout>
      <MainPageLayout.FullPage>
        <Loader active />
      </MainPageLayout.FullPage>
    </MainPageLayout>
  );
};

const CalculatePaymentsController = lazy(() =>
  import('./CalculatePayments.controller'),
);

// Main Render
const CalculatePaymentsLoadable = () => {
  return (
    <div>
      <Suspense fallback={<PreLoader />}>
        <CalculatePaymentsController />
      </Suspense>
    </div>
  );
};

export default CalculatePaymentsLoadable;
