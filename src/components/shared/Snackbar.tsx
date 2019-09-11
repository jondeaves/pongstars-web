import IconButton from '@material-ui/core/IconButton';
import { default as MDSnackbar } from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';

import React from 'react';
import { useFela } from 'react-fela';

import styles from './Snackbar.styles';
import { IProps } from './Snackbar.types';

const Snackbar: React.FC<IProps> = (props: IProps) => {
  const { message, onClose } = props;
  const { css } = useFela<null, IProps>(props);

  return (
    <MDSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={message !== ''}
      onClose={onClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      autoHideDuration={5000}
    >
      <SnackbarContent
        className={css(styles.main)}
        aria-describedby="client-snackbar"
        message={
          <span className={css(styles.message)}>
            <ErrorIcon className={css(styles.icon)} />
            {message}
          </span>
        }
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </MDSnackbar>
  );
};

export default Snackbar;
