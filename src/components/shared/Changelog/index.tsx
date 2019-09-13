import React, { useEffect, useState } from 'react';
import { useFela } from 'react-fela';
import { Link } from 'react-router-dom';

import IChangelogItems from '../../../types/IChangelogItems';

import Loader from '../../shared/Loader';
import ChangelogItem from './ChangelogItem';

import { loadChangelog } from './helpers';

import styles from './Changelog.styles';
import { IProps } from './Changelog.types';

const Changelog: React.FC<IProps> = (props: IProps) => {
  const { limit } = props;
  const { css } = useFela<null, IProps>(props);
  const [loading, setLoading] = useState<boolean>(true);
  const [changelog, setChangelog] = useState<IChangelogItems[]>([]);
  const [pagination, setPagination] = useState<boolean>(false);

  useEffect(() => {
    loadChangelog(setLoading, setChangelog, setPagination, limit);
  }, [limit]);

  if (loading) {
    return <Loader message="Loading recent updates" />;
  }

  return (
    <div className={css(styles.main)}>
      {changelog.map((item, idx) => (
        <ChangelogItem key={idx} date={item.date} items={item.items} />
      ))}

      {limit && pagination && (
        <p className={css(styles.viewAll)}>
          <Link to="/updates">View All</Link>
        </p>
      )}
    </div>
  );
};

export default Changelog;
