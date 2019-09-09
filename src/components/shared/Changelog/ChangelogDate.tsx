import React from 'react';
import { useFela } from 'react-fela';

import styles from './ChangelogDate.styles';
import { IProps } from './ChangelogDate.types';

const ChangelogDate: React.FC<IProps> = (props: IProps) => {
  const { value } = props;
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <p>{value}</p>
    </div>
  );
};

export default ChangelogDate;
