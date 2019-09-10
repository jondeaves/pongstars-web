import { IStyle } from 'fela';

// tslint:disable-next-line:no-empty-interface
export interface IProps {
  message: string;
  onClose: () => void;
}

export interface IStyles {
  icon: IStyle;
  main: IStyle;
  message: IStyle;
}
