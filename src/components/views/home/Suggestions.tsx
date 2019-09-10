import Axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useFela } from 'react-fela';

import ISuggestion from '../../../types/ISuggestion';
import ISuggestionsResp from '../../../types/ISuggestionResponse';

import Loader from '../../shared/Loader';
import SuggestionList from '../../shared/SuggestionList';

import styles from './Suggestions.styles';
import { IProps } from './Suggestions.types';

// const suggestions: ISuggestion[] = [
//   {
//     description: 'Use a coin toss to decide who gets to choose what side to start on',
//     title: 'Coin Toss',
//     votes: 98,
//   },
//   {
//     description: 'Show your record against a certain person. e.g. if i pick Richard it will show 120 wins - 0 losses.',
//     title: 'Statistics vs User',
//     votes: 42,
//   },
//   {
//     description: 'Auto win button when you get drawn against Andy Li.',
//     title: 'Trolling',
//     votes: -2,
//   },
// ];

const Suggestion: React.FC<IProps> = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);
  const [loading, setLoading] = useState<boolean>(true);
  const [suggestions, setSuggestions] = useState<ISuggestion[]>([]);

  useEffect(() => {
    loadSuggestions();
  }, []);

  const loadSuggestions = async () => {
    try {
      const resp: AxiosResponse<ISuggestionsResp> = await Axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}store/pongstars/suggestions`,
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

  return (
    <div className={css(styles.main)}>
      <h2 className={css(styles.title)}>Suggest a Feature</h2>
      <p>
        Welcome to the PongStars feature request area. If you’ve got any ideas you think would really improve the app
        then leave us a suggestion below, if it get’s really popluar we’ll add it to our roadmap! XD
      </p>

      {loading && <Loader />}
      {!loading && <SuggestionList items={suggestions} />}
    </div>
  );
};

export default Suggestion;
