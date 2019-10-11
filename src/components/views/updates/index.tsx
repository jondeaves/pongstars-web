import React from 'react';
import { Helmet } from 'react-helmet';

import Changelog from '../../shared/Changelog';

const Updates: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recent Updates | Pongstars</title>
      </Helmet>

      <h1>Recent Updates</h1>

      <Changelog />
    </React.Fragment>
  );
};

export default Updates;
