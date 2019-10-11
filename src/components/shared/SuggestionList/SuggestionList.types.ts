import { IStyle } from 'fela';

export interface IProps {
  limit?: number;
}

export interface IStyles {
  main: IStyle & {
    atDesktop: IStyle;
  };
  viewAll: IStyle & {
    atDesktop: IStyle;
  };
}
