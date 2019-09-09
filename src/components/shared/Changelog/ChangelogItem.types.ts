import { IStyle } from 'fela';

import IChangelogItem from '../../../types/IChangelogItem';

export interface IProps {
  date: string;
  items: IChangelogItem[];
}

export interface IStyles {
  main: IStyle;
}
