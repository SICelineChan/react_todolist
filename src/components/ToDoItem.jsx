/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function ToDoItem(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <Stack
      direction="row"
      spacing={2}
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>

      <IconButton onClick={handleClick} color="error" size="small">
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
}
