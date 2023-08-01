/* eslint-disable react/prop-types */
import { Button, Box, Stack, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

export default function TaskListForm(props) {
  const [name, setName] = useState("");

  function handleChangeTask(e) {
    setName(e.target.value);
  }

  function handleSubmitTask(e) {
    e.preventDefault();
    props.addingTask(name);
    setName("");
  }

  return (
    <Box sx={{ p: 3, m: 2, border: "1px dashed grey", flexGrow: 1 }}>
      <Stack direction="row" justifyContent="center">
        <form onSubmit={handleSubmitTask}>
          <TextField
            type="text"
            helperText="Please enter your task"
            name="text"
            value={name}
            onChange={handleChangeTask}
            label="Task"
            variant="outlined"
            style={{ padding: "10px" }}
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            endIcon={<AddCircleIcon />}
            style={{ marginTop: "18px" }}
          >
            Add
          </Button>
        </form>
      </Stack>
    </Box>
  );
}
