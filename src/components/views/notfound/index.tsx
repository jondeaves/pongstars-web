import React from 'react';

import Button from '../../shared/Button';

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <p>You may have accessed an expired link or you may have to check the spelling in the address bar.</p>
      <Button label="Home" link="/" spaced={true} />
    </div>
  );
};

export default NotFound;
