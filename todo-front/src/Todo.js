import { DeleteOutline } from '@mui/icons-material';
import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import React, { useState } from 'react'

const Todo = (props) => {
  const [item, setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true); // 초기값 true
  const deleteItem = props.deleteItem;
  const editItem = props.editItem;

  // checkboxEventHandler
  const checkboxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem(item);
  }

  // toggle
  const turnOffReadOnly = () => {
    setReadOnly(false);
  }

  const turnOnReadOnly = (e) => {
    if (e.key === "Enter" && readOnly === false) {
      setReadOnly(true);
      editItem(item);
    }
  }

  const editEventHandler = (e) => {
    setItem({...item, title: e.target.value});
  }

  const deleteEventHandler = (e) => {
    deleteItem(item);
  }
  
  return (
    <ListItem>
      <Checkbox
        checked={item.done}
        onChange={checkboxEventHandler}
      />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked", readOnly: item.done ? true : readOnly }}
          onClick={turnOffReadOnly}
          onKeyDown={turnOnReadOnly}
          onChange={editEventHandler}
          type='text'
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete Todo"
          onClick={deleteEventHandler}>
          <DeleteOutline />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Todo