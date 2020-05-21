import * as React from 'react';

import * as styles from './styles.module.scss';

const ContentLayout = ({ children }: any) => (
  <div className={styles.content}>{children}</div>
);

export default ContentLayout;
