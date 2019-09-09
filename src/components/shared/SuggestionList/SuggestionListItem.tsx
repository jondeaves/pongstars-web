import React from 'react';
import { useFela } from 'react-fela';

import styles from './SuggestionListItem.styles';
import { IProps } from './SuggestionListItem.types';

const SuggestionListItem: React.FC<IProps> = (props: IProps) => {
  const { item } = props;
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <p>{item.votes}</p>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  );
};

export default SuggestionListItem;
