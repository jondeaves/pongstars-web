import React from 'react';
import { useFela } from 'react-fela';

import IChangelogItems from '../../../types/IChangelogItems';
import Changelog from '../../shared/Changelog';

import styles from './Recent.styles';
import { IProps } from './Recent.types';

const changelogItems: IChangelogItems[] = [
  {
    date: '2019-09-05',
    items: [
      {
        description:
          'Sick of having to pick people to challenge? Why not send an open challenge and leave the decision making up to others.',
        title: 'Added open challenges',
      },
      {
        description: 'Now it’s hella slick.',
        title: 'Fixed loading animation',
      },
    ],
  },
  {
    date: '2019-09-01',
    items: [
      {
        description: 'Now you can upload a personalised avatar to the app - no 8=====D plz',
        title: 'Avatars!',
      },
    ],
  },
];

const Recent: React.FC<IProps> = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <h1>Recent Updates</h1>
      <p>
        Welcome to the PongStars feature request area. If you’ve got any ideas you think would really improve the app
        then leave us a suggestion below, if it get’s really popluar we’ll add it to our roadmap! XD
      </p>

      <Changelog items={changelogItems} />
    </div>
  );
};

export default Recent;
