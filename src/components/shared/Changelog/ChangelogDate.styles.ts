import { margin, padding } from 'polished';

import { IStyles } from './ChangelogDate.types';

const styles: IStyles = {
  main: {
    display: 'none',
    position: 'relative',

    ...margin(null, 35, null, null),
    ...padding(null, null, null, 12),

    atDesktop: {
      display: 'block',

      '&:before': {
        background: '#313545',
        borderRadius: 4,
        content: '" "',
        height: 'calc(100% - 28px)',
        left: 44,
        top: 72,
        width: 2,

        position: 'absolute',
      },
    },
  },

  inner: {
    alignItems: 'center',
    background: 'linear-gradient(90.13deg, #FD2962 0.08%, #FF1D97 99.87%)',
    borderRadius: 2,
    display: 'flex',
    height: 56,
    justifyContent: 'center',
    width: 56,

    ...margin(5),

    '> p': {
      color: '#111525',
      fontSize: '14px',
      fontWeight: 900,
      lineHeight: '18px',
      textAlign: 'center',
    },
  },
};

export default styles;
