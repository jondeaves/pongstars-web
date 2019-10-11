import { margin, padding } from 'polished';

import { IStyles } from './Changelog.types';

const styles: IStyles = {
  main: {
    ...margin(40, null, 20, null),
    ...padding(null, null, 10, null),
  },

  viewAll: {
    alignItems: 'center',
    display: 'block',
    fontSize: '11px',
    textTransform: 'uppercase',

    ...padding(0, null, null, null),

    atDesktop: {
      fontSize: '16px',
      ...padding(20, null, null, null),
    },
  },
};

export default styles;
