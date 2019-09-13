import React from 'react';
import { useFela } from 'react-fela';
import { Link } from 'react-router-dom';

import styles from './Button.styles';
import { IProps } from './Button.types';

const Button: React.FC<IProps> = (props: IProps) => {
  const { label, link } = props;
  const { css } = useFela<null, IProps>(props);

  if (link) {
    return (
      <p className={css(styles.main)}>
        <div className={css(styles.overlay)} />
        <Link to={link} className={css(styles.label)}>
          {label}
        </Link>
      </p>
    );
  }

  return (
    <p className={css(styles.main)}>
      <span className={css(styles.label)}>{label}</span>
    </p>
  );
};

export default Button;
