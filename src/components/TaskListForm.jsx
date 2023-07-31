/* eslint-disable react/prop-types */
import { Button, Box, Stack, TextField, FormGroup } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
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
    <Box
      component="form"
      sx={{ p: 3, m: 2, display: "flex", border: "1px dashed grey" }}
    >
      <Stack sx={{ width: "100%" }}>
        <FormGroup onSubmit={handleSubmit}>
          <TextField
            type="text"
            helperText="Please enter your task"
            id="new-todo-input"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
            label="Task"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            endIcon={<AddCircleIcon />}
          >
            Add
          </Button>
        </FormGroup>
      </Stack>
    </Box>
  );
}
