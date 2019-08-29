import Axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';

interface ISuggestion {
  title: string;
  description: string;
  votes: number;
}

interface ISuggestionsResp {
  meta: {
    totalPages: number;
    totalRecords: number;
    records: number;
    page: number;
  },
  links: {
    self: string;
    first: string|null;
    prev: string|null;
    next: string|null;
    last: string|null;
  },
  data: Array<{
    id: number;
    payload: ISuggestion,
    createdAt: string;
    updatedAt: string;
  }>;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState<ISuggestion[]>([]);

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    loadSuggestions();
  }, []);

  const loadSuggestions = () => {
    Axios.get(`${process.env.REACT_APP_API_ENDPOINT}store/pongstars/suggestions`, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      }
    })
    .then((resp: AxiosResponse<ISuggestionsResp>) => {
      setLoading(false);
      setSuggestions(resp.data.data.map(suggestionResp => ({
        description: suggestionResp.payload.description,
        title: suggestionResp.payload.title,
        votes: suggestionResp.payload.votes,
      })));


    })
    .catch(() => {
      setLoading(false);
      setSuggestions([]);
    });
  }

  const onChangeTitle = (evt: React.FormEvent<HTMLInputElement>) => {
    setNewTitle(evt.currentTarget.value);
  }

  const onChangeDescription = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    setNewDescription(evt.currentTarget.value);
  }

  const onSubmit = () => {
    if (newTitle.length < 3) {
      setFormError('Title must be at least 3 characters');
      return;
    }

    setFormError('');

    Axios.post(`${process.env.REACT_APP_API_ENDPOINT}store/pongstars/suggestions`, {
      payload: {
        description: newDescription,
        title: newTitle,
        votes: 0,
      }
    }, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      }
    })
    .then(() => {
      loadSuggestions();
    })
    // tslint:disable-next-line:no-console
    .catch(console.error);
  }

  // TODO: Sort the suggestions

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pongstars</h1>

        {loading && <p>Loading Suggestions...</p>}

        {!loading && suggestions.length === 0 && <p>No suggestions, why not add one?</p>}

        <form>
          <input type="text" value={newTitle} onChange={onChangeTitle} placeholder="Title" />
          <br />
          <textarea placeholder="Description" onChange={onChangeDescription} value={newDescription} />
          <br />
          <button type="button" onClick={onSubmit}>Add Suggestion</button>
          {formError && (
            <p>{formError}</p>
          )}
        </form>

        {!loading && suggestions.length > 0 &&
        <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Votes</th>
          </tr>
        </thead>
        {suggestions.map((suggestion, idx) => <tr key={idx}>
          <td>{suggestion.title}</td>
          <td>{suggestion.description}</td>
          <td>{suggestion.votes}</td>
        </tr>)}
        </table>
        }
      </header>
    </div>
  );
}

export default App;
