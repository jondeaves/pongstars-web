import { margin, padding } from 'polished';

import { IStyles } from './SuggestionListItem.types';

const styles: IStyles = {
  active: {
    color: '#FD2961',
    cursor: 'inherit',
  },

  content: {
    ...margin(5, null, null, 24),
  },

  description: {
    fontSize: '16px',
    letterSpacing: '0.1em',
    lineHeight: '18px',

    ...margin(6, null, null, null),
  },

  inactive: {
    color: 'rgba(255, 255, 255, 0.6)',
    cursor: 'inherit',

    ':hover': {
      color: 'rgba(255, 255, 255, 0.6)',
    }
  },

  main: {
    backgroundColor: '#242838',
    borderRadius: '8px',
    display: 'flex',

    ...margin(5, null, 5, null),
    ...padding(24),
  },

  title: {
    fontSize: '16px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },

  voteButton: {
    color: 'rgba(255, 255, 255, 0.6)',
    cursor: 'pointer',
    lineHeight: 0,
    transition: 'color 0.4s ease',

    ':hover': {
      color: '#FD2961',
      transition: 'color 0.1s ease',
    }
  },

  voteCount: {
    color: '#FD2961',
    fontSize: '14px',
    justifyContent: 'center',
    lineHeight: '21px',
  },

  votes: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default styles;
