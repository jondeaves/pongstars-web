import React from 'react';
import { useFela } from 'react-fela';

import ChangelogEntry from './ChangelogEntry';

import styles from './ChangelogEntries.styles';
import { IProps } from './ChangelogEntries.types';

const ChangelogEntries: React.FC<IProps> = (props: IProps) => {
  const { items } = props;
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      {items.map((item, idx) => (
        <ChangelogEntry key={idx} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default ChangelogEntries;
