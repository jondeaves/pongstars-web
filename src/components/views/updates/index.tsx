import React from 'react';
import { useFela } from 'react-fela';

import Changelog from '../../shared/Changelog';

import styles from './Updates.styles';
import { IProps } from './Updates.types';

const Updates: React.FC<IProps> = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <h1>Recent Updates</h1>

      <Changelog />
    </div>
  );
};

export default Updates;
