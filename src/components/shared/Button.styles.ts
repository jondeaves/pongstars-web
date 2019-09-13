import { padding } from 'polished';

import { IStyles } from './Button.types';

const labelStyles = {
  color: 'rgba(255, 255, 255, 0.87)',
  fontSize: 14,
  fontWeight: 'bolder',
  letterSpacing: '0.1em',
  lineHeight: 0,
  textTransform: 'uppercase',
};

const styles: IStyles = {
  main: {
    background: 'linear-gradient(102.26deg, #FD2961 0%, #FF1D97 95.75%)',
    borderRadius: 4,
    display: 'inline-block',
    position: 'relative',
    zIndex: 1,

    ':hover': {
      '> div': {
        backgroundColor: 'rgba(67, 77, 115, 0.25)',
      },
    },

    ...(labelStyles as any),
  },

  overlay: {
    backgroundColor: 'transparent',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    transition: 'background-color 0.4s ease',
    width: '100%',
    zIndex: 2,
  },

  label: {
    boxSizing: 'border-box',
    display: 'inline-block',
    position: 'relative',
    zIndex: 3,

    ...(labelStyles as any),
    ...padding(22, 32),

    ':hover': {
      ...(labelStyles as any),
    },
  },
};

export default styles;
