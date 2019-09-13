import Axios, { AxiosResponse } from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { CookieSetOptions } from 'universal-cookie';

import IStoreResponse from '../../../types/IStoreResponse';
import ISuggestion from '../../../types/ISuggestion';
import IVote from '../../../types/IVote';

export const createSuggestion = async (
  title: string,
  description: string,
  setSaving: Dispatch<SetStateAction<boolean>>,
) => {
  Axios.post(`${process.env.REACT_APP_API_ENDPOINT}store/pongstars/suggestions`, {
    payload: {
      description,
      title,
      votes: 0,
    }
  }, {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    }
  })
  .then(() => {
    window.location.reload();
  })
  // tslint:disable-next-line:no-console
  .catch(console.error)
  .finally(() => {
    setSaving(false);
  });
}

export const loadSuggestions = async (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setSuggestions: Dispatch<SetStateAction<ISuggestion[]>>,
  setPagination: Dispatch<SetStateAction<boolean>>,
  limit: number | undefined,
) => {
  try {
    let url = `${process.env.REACT_APP_API_ENDPOINT}store/pongstars/suggestions?sort=-votes`;
    if (limit) {
      url += `&pageSize=${limit}`;
    }

    const resp: AxiosResponse<IStoreResponse<ISuggestion>> = await Axios.get(url, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    });

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
    setPagination(resp.data.meta.page < resp.data.meta.totalPages);
  } catch (err) {
    setLoading(false);
    setSuggestions([]);
    setPagination(false);
  }
};

export const updateVotes = (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setSuggestions: Dispatch<SetStateAction<ISuggestion[]>>,
  setPagination: Dispatch<SetStateAction<boolean>>,
  limit: number | undefined,
  existingVotes: IVote[],
  setSnackbarMessage: Dispatch<SetStateAction<string>>,
  setCookie: (name: string, value: any, options?: CookieSetOptions) => void,
) => {
  return async (id: number, votes: number, modifier: number) => {
    if (existingVotes.findIndex(v => v.id === id) !== -1) {
      // Already voted for this item
      return;
    }

    try {
      await Axios.patch(
        `${process.env.REACT_APP_API_ENDPOINT}store/pongstars/suggestions/${id}`,
        {
          payload: {
            votes: votes + modifier,
          },
        },
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        },
      );

      existingVotes.push({
        id,
        up: modifier > 0,
      });

      setSnackbarMessage('');
      loadSuggestions(setLoading, setSuggestions, setPagination, limit);
      setCookie('suggestion-votes', existingVotes);
    } catch (err) {
      setSnackbarMessage(err.message);
    }
  };
};
