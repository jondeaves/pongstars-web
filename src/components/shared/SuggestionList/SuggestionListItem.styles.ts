import { margin, padding } from 'polished';

import { IStyles } from './SuggestionListItem.types';

const styles: IStyles = {
  content: {
    ...margin(5, null, null, 24),
  },

  description: {
    fontSize: '16px',
    letterSpacing: '0.1em',
    lineHeight: '18px',

    ...margin(6, null, null, null),
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

  voteCount: {
    color: '#FD2961',
    fontSize: '14px',
    justifyContent: 'center',
    lineHeight: '21px',
  },

  voteDown: {
    color: '#FD2961',
    cursor: 'pointer',
    lineHeight: 0,
  },

  voteUp: {
    color: '#FD2961',
    cursor: 'pointer',
    lineHeight: 0,
  },

  votes: {
    // alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',

    // ...margin(10, null, 10, null),
  },
};

export default styles;
