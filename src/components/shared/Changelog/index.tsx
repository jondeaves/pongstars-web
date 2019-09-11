import React from 'react';
import { useFela } from 'react-fela';

import ChangelogItem from './ChangelogItem';

import styles from './Changelog.styles';
import { IProps } from './Changelog.types';

const Changelog: React.FC<IProps> = (props: IProps) => {
  const { items } = props;
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      {items.map((item, idx) => (
        <ChangelogItem key={idx} date={item.date} items={item.items} />
      ))}
      <p className={css(styles.viewAll)}>
        <a href="#">
          View All
        </a>
      </p>
    </div>
  );
};

export default Changelog;
