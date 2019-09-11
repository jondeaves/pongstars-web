import { margin } from 'polished';

import { IStyles } from './SuggestionList.types';

const styles: IStyles = {
  main: {
    ...margin(45, null, null, null),

    atDesktop: {
      ...margin(65, null, null, null),
    },
  },

  title: {
    ...margin(0, null, 17, null),
  },
};

export default styles;
