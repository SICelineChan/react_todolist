/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function ToDo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setIsEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={props.id}>New Task for {props.name}</label>
        <input
          id={props.id}
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button type="button" onClick={() => setIsEditing(false)}>
          Cancel
          <span className="visually-hidden">remaining {props.name}</span>
        </Button>
        <Button type="submit">
          Save
          <span className="visually-hidden">new task for {props.name}</span>
        </Button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div>
      <input
        id={props.id}
        type="checkbox"
        defaultChecked={props.completed}
        onChange={() => props.toggleTaskCompleted(props.id)}
      />
      <label htmlFor={props.id}>{props.name}</label>
      <Stack direction="row" spacing={4}>
        <Button
          type="button"
          variant="contained"
          color="success"
          onClick={() => setIsEditing(true)}
        >
          Edit
          <span className="visually-hidden">{props.name}</span>
        </Button>
        <Button
          onClick={() => props.deleteTask(props.id)}
          type="button"
          color="error"
        >
          Delete?
        </Button>
      </Stack>
    </div>
  );

  return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}
