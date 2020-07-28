import React from 'react';

import { BaseTheme } from '../common/themes';

export const Wrapper: React.FunctionComponent = ({ children }) => (
  <BaseTheme>
    {children}
  </BaseTheme>
);

export default Wrapper;
