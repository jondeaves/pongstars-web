import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import React from 'react';
import { useFela } from 'react-fela';

import styles from './SuggestionListItem.styles';
import { IProps } from './SuggestionListItem.types';

const SuggestionListItem: React.FC<IProps> = (props: IProps) => {
  const { item } = props;
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <div className={css(styles.votes)}>
        <p className={css(styles.voteUp)}>
          <KeyboardArrowUp />
        </p>
        <p className={css(styles.voteCount)}>{item.votes}</p>
        <p className={css(styles.voteDown)}>
          <KeyboardArrowDown />
        </p>
      </div>
      <div className={css(styles.content)}>
        <h4 className={css(styles.title)}>{item.title}</h4>
        <p className={css(styles.description)}>{item.description}</p>
      </div>
    </div>
  );
};

export default SuggestionListItem;
