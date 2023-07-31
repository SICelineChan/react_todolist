/* eslint-disable react/prop-types */
import { Stack, Button } from "@mui/material";
export default function FilterBtn(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        type="button"
        className="btn toggle-btn"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}
        color="info"
        variant="outlined"
      >
        <span>{props.name}</span>
      </Button>
    </Stack>
  );
}
