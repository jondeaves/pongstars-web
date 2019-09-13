import { padding } from 'polished';

import { IStyles } from './Layout.types';

const styles: IStyles = {
  left: {
    backgroundColor: '#1F2434',
    left: 0,
    position: 'fixed',
    textAlign: 'center',
    top: 0,
    width: '100%',

    ...padding(20),

    atDesktop: {
      height: '100vh',
      width: 'auto',

      ...padding(47, 40, 40, 40),
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',

    atDesktop: {
      flexDirection: 'row',
    },
  },

  right: {
    backgroundColor: '#111525',
    flexGrow: 1,
    ...padding(156, 16, 66, 24),

    atDesktop: {
      ...padding(36, null, null, 192),
    },
  },
};

export default styles;
