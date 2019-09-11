
import Axios, { AxiosResponse } from 'axios';
import { compareDesc, format } from 'date-fns'
import React, { useEffect, useState } from 'react';
import { useFela } from 'react-fela';

import IChangelog from '../../../types/IChangelog';
import IChangelogItems from '../../../types/IChangelogItems';
import IStoreResponse from '../../../types/IStoreResponse';

import Changelog from '../../shared/Changelog';
import Loader from '../../shared/Loader';

import styles from './Recent.styles';
import { IProps } from './Recent.types';

const Recent: React.FC<IProps> = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);
  const [loading, setLoading] = useState<boolean>(true);
  const [changelog, setChangelog] = useState<IChangelogItems[]>([]);

  useEffect(() => {
    loadChangelog();
  }, []);

  const loadChangelog = async () => {
    try {
      const resp: AxiosResponse<IStoreResponse<IChangelog>> = await Axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}store/pongstars/changelog?pageSize=5`,
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        },
      );

      // Parse results
      const tmpChangelogEntries = resp.data.data
        .map(suggestionResp => ({
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
        const formattedDate = format(new Date(entry.date), 'dd.MM')
        const matchedIndex = entries.findIndex(e => e.date === formattedDate);

        if (matchedIndex === -1) {
          entries.push({
            date: formattedDate,
            items: [{
              description: entry.description,
              title: entry.title,
            }],
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
    } catch (err) {
      setLoading(false);
      setChangelog([]);
    }
  };

  return (
    <div className={css(styles.main)}>
      <h1>Recent Updates</h1>
      <p>
        Welcome to the PongStars feature request area. If you’ve got any ideas you think would really improve the app
        then leave us a suggestion below, if it get’s really popluar we’ll add it to our roadmap! XD
      </p>

      {loading && <Loader message="Loading recent updates" />}
      {!loading && changelog.length > 0 && <Changelog items={changelog} />}
    </div>
  );
};

export default Recent;
