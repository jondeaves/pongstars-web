import React from 'react';

import Recent from './Recent';
import Suggestions from './Suggestions';

const Home: React.FC = () => {
  return (
    <div>
      <Recent />
      <Suggestions />
    </div>
  );
};

export default Home;
