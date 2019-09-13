import { IStyle } from 'fela';
import { StyleProps } from 'react-fela';

export interface IProps {
  label: string;
  link?: string;
  loading?: boolean;
  disabled?: boolean;
  spaced?: boolean;
  onClick?: any;
  type?: 'submit' | 'button';
}

export interface IStyles {
  main: (props: StyleProps<null, IProps>) => IStyle;
  overlay: IStyle;
  label: (props: StyleProps<null, IProps>) => IStyle;
}
