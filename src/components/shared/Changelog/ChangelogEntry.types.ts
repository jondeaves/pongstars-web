import { IStyle } from 'fela';

export interface IProps {
  title: string;
  description: string;
}

export interface IStyles {
  description: IStyle & {
    beforeDesktop: IStyle & {
      '&:before': IStyle;
    };
  };
  main: IStyle;
  title: IStyle & {
    beforeDesktop: IStyle & {
      '&:before': IStyle;
    };
  };
}
