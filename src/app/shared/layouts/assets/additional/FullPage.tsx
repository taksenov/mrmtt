import * as React from 'react';

import * as styles from './styles.module.scss';

const FullPageLayout = ({ children }: any) => (
  <div className={styles.fullpage}>{children}</div>
);

export default FullPageLayout;
