import React from 'react';
import { useFela } from 'react-fela';
import { Link, Route, Switch } from 'react-router-dom';

import styles from './Layout.styles';
import { IProps } from './Layout.types';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import Home from '../views/home';
import NotFound from '../views/notfound';
import Suggestions from '../views/suggestions';
import Updates from '../views/updates';

const Layout: React.FC<IProps> = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <div className={css(styles.left)}>
        <Link to="/">
          <Logo width={88} height={72} />
        </Link>
      </div>
      <div className={css(styles.right)}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/suggestions" component={Suggestions} />
          <Route path="/updates" component={Updates} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default Layout;
