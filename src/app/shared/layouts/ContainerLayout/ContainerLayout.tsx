import * as React from 'react';
import { Container } from 'semantic-ui-react';
import cx from 'classnames';

import styles from './ContainerLayout.module.scss';
/**
 * IDEA: Обманываем установленные значения стилей в semantic-ui-react для Container
 * Поднимаем наш селектор `.containerWidth` выше на уровень, чем селекторы для <Container />
 * https://www.styled-components.com/docs/advanced#issues-with-specificity
 *
 * @export
 * @class ContainerLayout
 * @extends {React.Component<any, any>}
 */
export default class ContainerLayout extends React.Component<any, any> {
  render() {
    const { children, ...rest } = this.props;

    return (
      <Container
        {...rest}
        className={cx(
          styles.paddings,
          styles.containerWidth,
          styles.safariOnIOS,
        )}
      >
        {children}
      </Container>
    );
  }
}
