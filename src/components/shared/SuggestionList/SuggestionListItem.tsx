import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import React from 'react';
import { useFela } from 'react-fela';

import styles from './SuggestionListItem.styles';
import { IProps } from './SuggestionListItem.types';

const SuggestionListItem: React.FC<IProps> = (props: IProps) => {
  const { item, updateVotes } = props;
  const { css } = useFela<null, IProps>(props);

  const onVoteUp = () => {
    updateVotes(item.id, item.votes + 1);
  }

  const onVoteDown = () => {
    updateVotes(item.id, item.votes - 1);
  }

  return (
    <div className={css(styles.main)}>
      <div className={css(styles.votes)}>
        <KeyboardArrowUp className={css(styles.voteUp)} onClick={onVoteUp} />
        <p className={css(styles.voteCount)}>{item.votes}</p>
        <KeyboardArrowDown className={css(styles.voteDown)} onClick={onVoteDown} />
      </div>
      <div className={css(styles.content)}>
        <h4 className={css(styles.title)}>{item.title}</h4>
        <p className={css(styles.description)}>{item.description}</p>
      </div>
    </div>
  );
};

export default SuggestionListItem;
