import React from 'react';

import Recent from './Recent';
import Suggestions from './Suggestions';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Recent />
      <Suggestions />
    </React.Fragment>
  );
};

export default Home;
