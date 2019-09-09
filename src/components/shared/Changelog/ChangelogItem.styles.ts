import { margin } from 'polished';

import { IStyles } from './ChangelogItem.types';

const styles: IStyles = {
  main: {
    display: 'flex',

    atDesktop: {
      minHeight: 140,

      ...margin(null, null, 50, null),
    },
  },
};

export default styles;
