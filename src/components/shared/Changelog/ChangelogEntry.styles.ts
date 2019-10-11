import { margin } from 'polished';

import { IStyles } from './ChangelogEntry.types';

const styles: IStyles = {
  description: {
    fontSize: '16px',
    letterSpacing: '0.05em',
    lineHeight: '18px',
    position: 'relative',

    ...margin(10, null, 30, null),

    beforeDesktop: {
      ...margin(null, null, null, 24),

      '&:before': {
        background: 'linear-gradient(90.13deg, #FD2962 0.08%, #FF1D97 99.87%)',
        content: '" "',
        height: '100%',
        left: '-20px',
        width: 2,

        position: 'absolute',
      },
    },
  },
  main: {},
  title: {
    position: 'relative',

    beforeDesktop: {
      '&:before': {
        background: 'linear-gradient(90.13deg, #FD2962 0.08%, #FF1D97 99.87%)',
        borderRadius: '50%',
        content: '" "',
        height: 10,
        width: 10,

        ...margin(0, 15, 0, 0),
      },
    },
  },
};

export default styles;
