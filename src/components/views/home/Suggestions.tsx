import React from 'react';
import { useFela } from 'react-fela';

import SuggestionForm from '../../shared/SuggestionForm';
import SuggestionList from '../../shared/SuggestionList';

import styles from './Suggestions.styles';
import { IProps } from './Suggestions.types';

const Suggestion: React.FC<IProps> = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);

  return (
    <div className={css(styles.main)}>
      <h2 className={css(styles.title)}>Popular Suggestions</h2>

      <p className={css(styles.description)}>
        Welcome to the PongStars feature request area. If you’ve got any ideas you think would really improve the app
        then leave us a suggestion below, if it get’s really popular we’ll add it to our roadmap! XD
      </p>

      <SuggestionForm />
      <SuggestionList limit={5} />
    </div>
  );
};

export default Suggestion;
