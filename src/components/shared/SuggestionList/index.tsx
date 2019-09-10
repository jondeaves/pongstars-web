import React from 'react';
import { useFela } from 'react-fela';

import SuggestionListItem from './SuggestionListItem';

import styles from './SuggestionList.styles';
import { IProps } from './SuggestionList.types';

const SuggestionList: React.FC<IProps> = (props: IProps) => {
  const { items, updateVotes } = props;
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <h3>popular suggestions</h3>

      {items.map((item, idx) => (
        <SuggestionListItem key={idx} item={item} updateVotes={updateVotes} />
      ))}
    </div>
  );
};

export default SuggestionList;
