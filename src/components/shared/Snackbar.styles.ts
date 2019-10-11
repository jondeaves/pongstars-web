import { margin } from 'polished';

import { IStyles } from './Snackbar.types';

const styles: IStyles = {
  icon: {
    ...margin(null, 10, null, null),
  },
  main: {
    backgroundColor: '#B00020!important',
  },
  message: {
    alignItems: 'center',
    display: 'flex',
  },
};

export default styles;
