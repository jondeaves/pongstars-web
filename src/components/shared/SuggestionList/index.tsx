import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useFela } from 'react-fela';
import { Link } from 'react-router-dom';

import ISuggestion from '../../../types/ISuggestion';
import IVote from '../../../types/IVote';

import Loader from '../../shared/Loader';
import Snackbar from '../../shared/Snackbar';

import SuggestionListItem from './SuggestionListItem';

import { loadSuggestions, updateVotes } from './helpers';

import styles from './SuggestionList.styles';
import { IProps } from './SuggestionList.types';

const SuggestionList: React.FC<IProps> = (props: IProps) => {
  const { limit } = props;
  const { css } = useFela<null, IProps>(props);
  const [loading, setLoading] = useState<boolean>(true);
  const [suggestions, setSuggestions] = useState<ISuggestion[]>([]);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [pagination, setPagination] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies(['suggestion-votes']);

  const existingVotes: IVote[] = typeof cookies['suggestion-votes'] !== 'undefined' ? cookies['suggestion-votes'] : [];

  useEffect(() => {
    loadSuggestions(setLoading, setSuggestions, setPagination, limit);
  }, [limit]);

  const onCloseSnackbar = () => {
    setSnackbarMessage('');
  };

  const updateVoteProp = updateVotes(
    setLoading,
    setSuggestions,
    setPagination,
    limit,
    existingVotes,
    setSnackbarMessage,
    setCookie,
  );

  if (loading) {
    return <Loader message="Loading popular suggestions" />;
  }

  return (
    <div className={css(styles.main)}>
      {suggestions.map((item, idx) => (
        <SuggestionListItem key={idx} item={item} updateVotes={updateVoteProp} votes={existingVotes} />
      ))}

      {limit && pagination && (
        <p className={css(styles.viewAll)}>
          <Link to="/suggestions">View All</Link>
        </p>
      )}

      <Snackbar message={snackbarMessage} onClose={onCloseSnackbar} />
    </div>
  );
};

export default SuggestionList;
