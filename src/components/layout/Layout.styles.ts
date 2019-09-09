import { padding } from 'polished';

import { IStyles } from './Layout.types'

const styles: IStyles = {
  left: {
    backgroundColor: '#1F2434',
    textAlign: 'center',

    ...padding(20),

    atDesktop: {
      ...padding(57, 40, 40, 40),
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',

    atDesktop: {
      flexDirection: 'row',
    },

    height: '100%',
  },

  right: {
    backgroundColor: '#111525',
    flexGrow: 1,
    ...padding(16, 66, 66, 24),

    atDesktop: {
      ...padding(36, null, null, null),
    },
  },
};

export default styles;
