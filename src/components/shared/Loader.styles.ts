import { margin } from 'polished';

import { IStyles } from './Loader.types';

const styles: IStyles = {
  main: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    ...margin(20, 5),
  },

  message: {
    fontSize: '14px',
  }
};

export default styles;
