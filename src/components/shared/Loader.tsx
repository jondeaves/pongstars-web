import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import { useFela } from 'react-fela';

import styles from './Loader.styles';
import { IProps } from './Loader.types';

const Loader: React.FC<IProps> = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);
  const { message } = props;

  return (
    <div className={css(styles.main)}>
      <CircularProgress />
      <p className={css(styles.message)}>{message}</p>
    </div>
  );
};

export default Loader;
