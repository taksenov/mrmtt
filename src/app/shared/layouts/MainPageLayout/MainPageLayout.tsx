import * as React from 'react';

import FullPageLayout from '../assets/additional/FullPage';
import ContentLayout from '../assets/additional/Content';

import * as styles from './styles.module.scss';

export default class MainPageLayout extends React.Component<any, any> {
  static FullPage = FullPageLayout;

  static Content = ContentLayout;

  render() {
    const { children } = this.props;

    return <div className={styles.main}>{children}</div>;
  }
}
