import React from 'react'
import { useFela } from 'react-fela';

import styles from './Layout.styles';
import { IProps } from './Layout.types'

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Layout: React.FC = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);

	return (
    <div className={css(styles.main)}>
      <div className={css(styles.left)}>
        <Logo width={88} height={72} />
      </div>
      <div className={css(styles.right)}>
        <h1>Recent Updates</h1>
        <p>Welcome to the PongStars feature request area. If you’ve got any ideas you think would really improve the app then leave us a suggestion below, if it get’s really popluar we’ll add it to our roadmap! XD</p>

        <h2>Suggest a feature</h2>
        <h3>popular suggestions</h3>
        <h4>title</h4>
      </div>
    </div>
	);
}

export default Layout;
