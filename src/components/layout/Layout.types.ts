import { IStyle } from 'fela';

// tslint:disable-next-line:no-empty-interface
export interface IProps {}

export interface IStyles {
  left: IStyle & {
    atDesktop: IStyle;
  };
  main: IStyle & {
    atDesktop: IStyle;
  };
  right: IStyle & {
    atDesktop: IStyle;
  };
  logo: IStyle & {
    atDesktop: IStyle;
  };
}
