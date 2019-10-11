import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { useFela } from 'react-fela';
import { Link } from 'react-router-dom';

import styles from './Button.styles';
import { IProps } from './Button.types';

const Button: React.FC<IProps> = (props: IProps) => {
  const { disabled, label, link, loading, onClick, type } = props;
  const { css } = useFela<null, IProps>(props);

  if (link) {
    return (
      <p className={css(styles.main)}>
        <span className={css(styles.overlay)} />
        <Link to={link} className={css(styles.label)}>
          {label}
        </Link>
      </p>
    );
  }

  return (
    <button disabled={disabled} type={type} className={css(styles.main)} onClick={onClick}>
      <span className={css(styles.overlay)} />
      <span className={css(styles.label)}>{loading ? <CircularProgress size={30} /> : label}</span>
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  spaced: false,
};

export default Button;
