import { margin, padding } from 'polished';

import { IStyles } from './Changelog.types';

const styles: IStyles = {
  main: {
    ...margin(40, null, 20, null),
  },

  viewAll: {
    alignItems: 'center',
    color: '#FD2961',
    display: 'block',
    fontSize: '16px',
    fontWeight: 900,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',

    ...padding(20, null, null, null),
  },
};

export default styles;
