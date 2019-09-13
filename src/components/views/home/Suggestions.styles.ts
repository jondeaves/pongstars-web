import { margin } from 'polished';

import { IStyles } from './Suggestions.types';

const styles: IStyles = {
  description: {
    ...margin(null, null, 30, null),
  },
  main: {},
  snackbar: {
    backgroundColor: '#B00020!important',
  },
  snackbarIcon: {
    ...margin(null, 10, null, null),
  },
  snackbarMessage: {
    alignItems: 'center',
    display: 'flex',
  },
  title: {
    ...margin(10, null, 12, null),
  },
};

export default styles;
