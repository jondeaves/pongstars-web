import React from 'react';
import { Helmet } from 'react-helmet';

import Recent from './Recent';
import Suggestions from './Suggestions';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pongstars | Collect ideas and feedback changes to the Pongstars community</title>
      </Helmet>

      <Recent />
      <Suggestions />
    </React.Fragment>
  );
};

export default Home;
