import React from 'react';
import { Link } from 'react-router-dom';

const Suggestions: React.FC = () => {
  return (
    <div>
      <h1>Popular Suggestions</h1>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Suggestions;
