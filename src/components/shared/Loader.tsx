import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import { useFela } from 'react-fela';

import styles from './Loader.styles';
import { IProps } from './Loader.types';

const Loader: React.FC<IProps> = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
