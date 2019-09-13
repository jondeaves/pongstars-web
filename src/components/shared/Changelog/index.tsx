import Axios, { AxiosResponse } from 'axios';
import { compareDesc, format } from 'date-fns';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFela } from 'react-fela';
import { Link } from 'react-router-dom';

import IChangelog from '../../../types/IChangelog';
import IChangelogItems from '../../../types/IChangelogItems';
import IStoreResponse from '../../../types/IStoreResponse';

import Loader from '../../shared/Loader';
import ChangelogItem from './ChangelogItem';

import styles from './Changelog.styles';
import { IProps } from './Changelog.types';

const loadChangelog = async (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setChangelog: Dispatch<SetStateAction<IChangelogItems[]>>,
  setPagination: Dispatch<SetStateAction<boolean>>,
  limit: number | undefined,
) => {
  try {
    let url = `${process.env.REACT_APP_API_ENDPOINT}store/pongstars/changelog`;
    if (limit) {
      url += `?pageSize=${limit}`;
    }

    const resp: AxiosResponse<IStoreResponse<IChangelog>> = await Axios.get(url, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    });

    // Parse results
    const tmpChangelogEntries = resp.data.data.map(suggestionResp => ({
      date: suggestionResp.payload.date,
      description: suggestionResp.payload.description,
      id: suggestionResp.id,
      title: suggestionResp.payload.title,
    }));

    // Sort results
    tmpChangelogEntries.sort((itemA, itemB) => {
      return compareDesc(new Date(itemA.date), new Date(itemB.date));
    });

    // Format to changelog items
    const entries: IChangelogItems[] = [];

    tmpChangelogEntries.forEach(entry => {
      // Do we have an entry for this date already?
      const formattedDate = format(new Date(entry.date), 'dd.MM');
      const matchedIndex = entries.findIndex(e => e.date === formattedDate);

      if (matchedIndex === -1) {
        entries.push({
          date: formattedDate,
          items: [
            {
              description: entry.description,
              title: entry.title,
            },
          ],
        });
      } else {
        entries[matchedIndex].items.push({
          description: entry.description,
          title: entry.title,
        });
      }
    });

    setLoading(false);
    setChangelog(entries);
    setPagination(resp.data.meta.page < resp.data.meta.totalPages);
  } catch (err) {
    setLoading(false);
    setChangelog([]);
    setPagination(false);
  }
};

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

      {!limit && (
        <p className={css(styles.viewAll)}>
          <Link to="/">Back Home</Link>
        </p>
      )}
    </div>
  );
};

export default Changelog;
