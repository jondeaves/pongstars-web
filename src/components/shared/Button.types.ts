import { IStyle } from 'fela';

export interface IProps {
  label: string;
  link?: string;
}

export interface IStyles {
  main: IStyle & {
    ':hover': IStyle;
  };
  overlay: IStyle;
  label: IStyle & {
    ':hover': IStyle;
  };
}
