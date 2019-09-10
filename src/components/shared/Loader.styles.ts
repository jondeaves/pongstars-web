import { margin } from 'polished';

import { IStyles } from './Loader.types';

const styles: IStyles = {
  main: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',

    ...margin(20, 5),
  },
};

export default styles;
