import React from 'react';
import { useFela } from 'react-fela';

import SuggestionList from '../../shared/SuggestionList';

import styles from './Suggestions.styles';
import { IProps } from './Suggestions.types';

const Suggestion: React.FC<IProps> = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <h2 className={css(styles.title)}>Suggest a Feature</h2>
      <h3 className={css(styles.subTitle)}>popular suggestions</h3>
      <p>
        Welcome to the PongStars feature request area. If you’ve got any ideas you think would really improve the app
        then leave us a suggestion below, if it get’s really popluar we’ll add it to our roadmap! XD
      </p>

      <SuggestionList limit={5} />
    </div>
  );
};

export default Suggestion;
