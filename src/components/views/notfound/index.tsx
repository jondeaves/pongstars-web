import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../shared/Button';

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <Button label="Home" link="/" />
    </div>
  );
};

export default NotFound;
