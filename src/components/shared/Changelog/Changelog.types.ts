import { IStyle } from 'fela';

export interface IProps {
  limit?: number;
}

export interface IStyles {
  main: IStyle;
  viewAll: IStyle & {
    atDesktop: IStyle;
  };
}
