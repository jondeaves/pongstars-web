import { margin } from 'polished';

import { IStyles } from './Suggestions.types';

const styles: IStyles = {
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
    ...margin(10, null, null, null),
  },
};

export default styles;
