import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import React from 'react';
import { useFela } from 'react-fela';

import styles from './SuggestionListItem.styles';
import { IProps } from './SuggestionListItem.types';

const SuggestionListItem: React.FC<IProps> = (props: IProps) => {
  const { item, updateVotes, votes } = props;
  const { css } = useFela<null, IProps>(props);

  const votedItem = votes.find(v => v.id === item.id);
  const hasVotedUp = typeof votedItem !== 'undefined' && votedItem.up === true;
  const hasVotedDown = typeof votedItem !== 'undefined' && votedItem.up === false;

  console.log(`ID: ${item.id} | Up: ${hasVotedUp} | Down: ${hasVotedDown}`);

  const onVoteUp = () => {
    updateVotes(item.id, item.votes, 1);
  }

  const onVoteDown = () => {
    updateVotes(item.id, item.votes, -1);
  }

  const upVoteStyles: any[] = [styles.voteButton];
  const downVoteStyles: any[] = [styles.voteButton];

  if (typeof votedItem !== 'undefined') {
    upVoteStyles.push(hasVotedUp ? styles.active : styles.inactive);
  }

  if (typeof votedItem !== 'undefined') {
    downVoteStyles.push(hasVotedDown ? styles.active : styles.inactive);
  }

  return (
    <div className={css(styles.main)}>
      <div className={css(styles.votes)}>
        <KeyboardArrowUp className={css(...upVoteStyles)} onClick={onVoteUp} />
        <p className={css(styles.voteCount)}>{item.votes}</p>
        <KeyboardArrowDown className={css(...downVoteStyles)} onClick={onVoteDown} />
      </div>
      <div className={css(styles.content)}>
        <h4 className={css(styles.title)}>{item.title}</h4>
        <p className={css(styles.description)}>{item.description}</p>
      </div>
    </div>
  );
};

export default SuggestionListItem;
