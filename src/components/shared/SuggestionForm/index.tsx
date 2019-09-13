import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, TextField } from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import React, { useState } from 'react';
import { useFela } from 'react-fela';

import Button from '../../shared/Button';

import styles from './SuggestionForm.styles';
import { IProps } from './SuggestionForm.types';

const SuggestionForm: React.FC<IProps> = (props: IProps) => {
  const { css } = useFela<null, IProps>(props);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    alert('coming soon');

    evt.preventDefault();
  };

  const onTitleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.currentTarget.value);
  };

  const onDescriptionChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(evt.currentTarget.value);
  };

  return (
    <ExpansionPanel className={css(styles.main)} square={false}>
      <ExpansionPanelSummary
        expandIcon={<KeyboardArrowDown className={css(styles.toggleIcon)} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <p className={css(styles.title)}>Add Suggestion</p>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <form className={css(styles.formWrapper)} onSubmit={onSubmit}>
          <TextField
            className={css(styles.textField)}
            id="title"
            label="Title"
            value={title}
            helperText="Short descriptive text"
            margin="dense"
            fullWidth={true}
            onChange={onTitleChange}
          />

          <TextField
            className={css(styles.textField)}
            id="description"
            label="Description"
            value={description}
            helperText="Detailed suggestion"
            multiline={true}
            rowsMax="6"
            margin="dense"
            fullWidth={true}
            onChange={onDescriptionChange}
          />

          <Button label="Send Suggestion" spaced={true} onClick={onSubmit} />
        </form>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default SuggestionForm;
