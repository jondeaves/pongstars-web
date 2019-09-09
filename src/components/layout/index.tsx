import React from 'react';
import { useFela } from 'react-fela';

import styles from './Layout.styles';
import { IProps } from './Layout.types';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import Home from '../views/home';

const Layout: React.FC = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <div className={css(styles.left)}>
        <Logo width={88} height={72} />
      </div>
      <div className={css(styles.right)}>
        <Home />
      </div>
    </div>
  );
};

export default Layout;
