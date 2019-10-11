import { IStyle } from 'fela';

export interface IProps {
  value: string;
}

export interface IStyles {
  main: IStyle & {
    atDesktop: IStyle & {
      '&:before': IStyle;
    };
  };
  inner: IStyle & {
    '> p': IStyle;
  };
}
