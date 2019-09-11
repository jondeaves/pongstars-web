import { IStyle } from 'fela';

import ISuggestion from '../../../types/ISuggestion';
import IVote from '../../../types/IVote';

export interface IProps {
  items: ISuggestion[];
  updateVotes: (id: number, votes: number, modifier: number) => void;
  votes: IVote[];
}

export interface IStyles {
  main: IStyle & {
    atDesktop: IStyle;
  };
  title: IStyle;
}
