import React from 'react';
import { Helmet } from 'react-helmet';

import SuggestionList from '../../shared/SuggestionList';

const Suggestions: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Popular Suggestions | Pongstars</title>
      </Helmet>

      <h1>Popular Suggestions</h1>

      <SuggestionList />
    </React.Fragment>
  );
};

export default Suggestions;
