import { IStyle } from 'fela';
import { StyleProps } from 'react-fela';

export interface IProps {
  label: string;
  link?: string;
  spaced?: boolean;
}

export interface IStyles {
  main: (props: StyleProps<null, IProps>) => IStyle;
  overlay: IStyle;
  label: IStyle & {
    ':hover': IStyle;
  };
}
