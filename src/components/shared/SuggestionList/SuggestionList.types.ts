import { IStyle } from 'fela';

import ISuggestion from '../../../types/ISuggestion';

export interface IProps {
  items: ISuggestion[];
  updateVotes: (id: number, votes: number) => void;
}

export interface IStyles {
  main: IStyle;
}
