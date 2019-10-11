import React from 'react';
import { useFela } from 'react-fela';

import Changelog from '../../shared/Changelog';

import styles from './Recent.styles';
import { IProps } from './Recent.types';

const Recent: React.FC<IProps> = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <h1>Recent Updates</h1>
      <p>
        Welcome to the PongStars feature request area. If you’ve got any ideas you think would really improve the app
        then leave us a suggestion below, if it get’s really popular we’ll add it to our roadmap! XD
      </p>

      <Changelog limit={5} />
    </div>
  );
};

export default Recent;
