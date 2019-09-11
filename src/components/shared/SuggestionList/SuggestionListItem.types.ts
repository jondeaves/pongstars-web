import { IStyle } from 'fela';

import ISuggestion from '../../../types/ISuggestion';
import IVote from '../../../types/IVote';

export interface IProps {
  item: ISuggestion;
  updateVotes: (id: number, votes: number, modifier: number) => void;
  votes: IVote[];
}

export interface IStyles {
  active: IStyle;
  content: IStyle;
  description: IStyle;
  inactive: IStyle & {
    ':hover': IStyle;
  };
  main: IStyle;
  title: IStyle;
  voteButton: IStyle & {
    ':hover': IStyle;
  };
  voteCount: IStyle;
  votes: IStyle;
}
