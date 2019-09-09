import React from 'react';
import { useFela } from 'react-fela';

import styles from './ChangelogEntry.styles';
import { IProps } from './ChangelogEntry.types';

const ChangelogEntry: React.FC<IProps> = (props: IProps) => {
  const { title, description } = props;
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <h4 className={css(styles.title)}>{title}</h4>
      <p className={css(styles.description)}>{description}</p>
    </div>
  );
};

export default ChangelogEntry;
