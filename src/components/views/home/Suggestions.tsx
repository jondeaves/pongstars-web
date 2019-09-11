import Axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useFela } from 'react-fela';

import IStoreResponse from '../../../types/IStoreResponse';
import ISuggestion from '../../../types/ISuggestion';

import Loader from '../../shared/Loader';
import Snackbar from '../../shared/Snackbar';
import SuggestionList from '../../shared/SuggestionList';

import styles from './Suggestions.styles';
import { IProps } from './Suggestions.types';

const Suggestion: React.FC<IProps> = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);
  const [loading, setLoading] = useState<boolean>(true);
  const [suggestions, setSuggestions] = useState<ISuggestion[]>([]);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');

  useEffect(() => {
    loadSuggestions();
  }, []);

  const updateVotes = async (id: number, votes: number) => {
    try {
      await Axios.patch(
        `${process.env.REACT_APP_API_ENDPOINT}store/pongstars/suggestions/${id}`,
        {
          payload: {
            votes,
          }
        },
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        },
      );

      setSnackbarMessage('');
      loadSuggestions();
    } catch (err) {
      setSnackbarMessage(err.message);
    }
  }

  const loadSuggestions = async () => {
    try {
      const resp: AxiosResponse<IStoreResponse<ISuggestion>> = await Axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}store/pongstars/suggestions?pageSize=5`,
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        },
      );

      setLoading(false);
      setSuggestions(
        resp.data.data
          .map(suggestionResp => ({
            description: suggestionResp.payload.description,
            id: suggestionResp.id,
            title: suggestionResp.payload.title,
            votes: suggestionResp.payload.votes,
          }))
          .sort((itemA, itemB) => itemB.votes - itemA.votes),
      );
    } catch (err) {
      setLoading(false);
      setSuggestions([]);
    }
  };

  const onCloseSnackbar = () => {
    setSnackbarMessage('');
  }

  return (
    <div className={css(styles.main)}>
      <h2 className={css(styles.title)}>Suggest a Feature</h2>
      <p>
        Welcome to the PongStars feature request area. If you’ve got any ideas you think would really improve the app
        then leave us a suggestion below, if it get’s really popluar we’ll add it to our roadmap! XD
      </p>

      {loading && <Loader message="Loading popular suggestions" />}
      {!loading && suggestions.length > 0 && <SuggestionList items={suggestions} updateVotes={updateVotes} />}

      <Snackbar message={snackbarMessage} onClose={onCloseSnackbar} />
    </div>
  );
};

export default Suggestion;
