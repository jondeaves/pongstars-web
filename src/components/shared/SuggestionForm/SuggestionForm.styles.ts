import { margin } from 'polished';

import { IStyles } from './SuggestionForm.types';

const styles: IStyles = {
  formWrapper: {
    width: '100%',
  },

  main: {
    backgroundColor: 'rgb(36, 40, 56)!important',
    borderRadius: '8px!important',
  },

  textField: {
    color: 'rgba(255, 255, 255, 0.87)!important',

    '>> label, > div > input, >> p': {
      color: 'rgba(255, 255, 255, 0.87)!important',
    },
  },

  title: {
    color: 'rgba(255, 255, 255, 0.87)!important',
    display: 'block',
    textAlign: 'center',
    width: '100%',
  },

  toggleIcon: {
    fill: 'rgba(255, 255, 255, 0.87)!important',
  },
};

export default styles;
