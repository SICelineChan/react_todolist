/* eslint-disable react/prop-types */
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

export default function ToDoInput(props) {
  const [textInput, setTextInput] = useState("");

  function handleAddButton(e) {
    const newToDo = e.target.value;
    console.log(e.target.value);
    setTextInput(newToDo);
  }
  return (
    <Container maxWidth="lg">
      <h2>This is where to input list</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Enter a To-Do item"
          variant="standard"
          onChange={handleAddButton}
          value={textInput}
        />
        <Button
          variant="outlined"
          onClick={() => {
            props.onPass(textInput);
            setTextInput("");
          }}
          startIcon={<AddCircleIcon />}
        >
          Add
        </Button>
      </Box>
    </Container>
  );
}
