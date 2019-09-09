import React from 'react';
import { useFela } from 'react-fela';

import ChangelogDate from './ChangelogDate';
import ChangelogEntries from './ChangelogEntries';

import styles from './ChangelogItem.styles';
import { IProps } from './ChangelogItem.types';

const ChangelogItem: React.FC<IProps> = (props: IProps) => {
  const { date, items } = props;
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <ChangelogDate value={date} />
      <ChangelogEntries items={items} />
    </div>
  );
};

export default ChangelogItem;
