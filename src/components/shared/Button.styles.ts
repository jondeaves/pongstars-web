import { margin, padding } from 'polished';

import { IStyles } from './Button.types';

const labelStyles = (disabled: boolean | undefined) => ({
  color: disabled ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.87)',
  fontSize: 14,
  fontWeight: 'bolder',
  letterSpacing: '0.1em',
  lineHeight: 0,
  textTransform: 'uppercase',
});

const styles: IStyles = {
  main: ({ disabled, onClick, spaced }) => ({
    background: disabled ? 'rgba(253, 41, 97, 0.1)' : 'linear-gradient(102.26deg, #FD2961 0%, #FF1D97 95.75%)',
    border: 'none',
    borderRadius: 4,
    cursor: onClick && !disabled ? 'pointer' : 'inherit',
    display: 'inline-block',
    outline: 'none',
    position: 'relative',
    zIndex: 1,

    ...margin(spaced ? 20 : null, null, null, null),

    ':hover': {
      '> span:first-child': {
        backgroundColor: disabled ? 'transparent': 'rgba(67, 77, 115, 0.25)',
      },
    },

    ...(labelStyles(disabled) as any),
  }),

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

  label: ({ loading }) => ({
    boxSizing: 'border-box',
    display: 'inline-block',
    position: 'relative',
    zIndex: 3,

    ...(labelStyles as any),
    ...padding(loading ? 7 : 22, 32),

    ':hover': {
      ...(labelStyles as any),
    },
  }),
};

export default styles;
