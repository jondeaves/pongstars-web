import React, { useEffect, useState } from 'react';
import Axios, { AxiosResponse } from 'axios';

import './App.css';

interface Suggestion {
  id: number;
  payload: Suggestion,
  createdAt: string;
  updatedAt: string;
}

interface SuggestionsResp {
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
  data: Suggestion[];
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    loadSuggestions();
  }, []);

  const loadSuggestions = () => {
    Axios.get('https://api.dev.morpus.net/store/pongstars/suggestions', {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      }
    })
    .then((resp: AxiosResponse<SuggestionsResp>) => {
      setLoading(false);
      setSuggestions(resp.data.data);
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
    Axios.post('https://api.morpus.net/store/pongstars/suggestions', {
      payload: {
        title: newTitle,
        description: newDescription,
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
        <ul>
        {suggestions.map(suggestion => <li key={suggestion.id}>{JSON.stringify(suggestion)}</li>)}
        </ul>
        }
      </header>
    </div>
  );
}

export default App;
