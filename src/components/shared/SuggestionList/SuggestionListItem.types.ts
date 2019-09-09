import { IStyle } from 'fela';

import ISuggestion from '../../../types/ISuggestion';

export interface IProps {
  item: ISuggestion;
}

export interface IStyles {
  content: IStyle;
  description: IStyle;
  main: IStyle;
  title: IStyle;
  voteCount: IStyle;
  voteDown: IStyle;
  voteUp: IStyle;
  votes: IStyle;
}
