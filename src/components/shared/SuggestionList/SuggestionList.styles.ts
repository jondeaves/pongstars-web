import { margin, padding } from 'polished';

import { IStyles } from './SuggestionList.types';

const styles: IStyles = {
  main: {
    ...margin(45, null, null, null),

    atDesktop: {
      ...margin(40, null, null, null),
    },
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
