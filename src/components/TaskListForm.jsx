/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function TaskListForm(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addingTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Anything else needs to be done?
        </label>
      </h2>

      <TextField
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
        label="Task"
        variant="outlined"
      />
      <Button type="submit" className="btn btn__primary btn__lg">
        Add
      </Button>
    </form>
  );
}
