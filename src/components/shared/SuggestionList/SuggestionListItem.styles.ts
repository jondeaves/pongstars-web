import { margin, padding } from 'polished';

import { IStyles } from './SuggestionListItem.types';

const styles: IStyles = {
  content: {
    ...margin(null, null, null, 24),
  },

  description: {
    fontSize: '16px',
    letterSpacing: '0.1em',
    lineHeight: '18px',

    ...margin(10, null, null, null),
  },

  main: {
    alignItems: 'center',
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

  voteCount: {
    color: '#FD2961',
    fontSize: '14px',
  },

  voteDown: {
    color: '#FD2961',
    cursor: 'pointer',
    lineHeight: 0,
    transform: 'rotate(180deg)',
  },

  voteUp: {
    color: '#FD2961',
    cursor: 'pointer',
    lineHeight: 0,
  },

  votes: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default styles;
