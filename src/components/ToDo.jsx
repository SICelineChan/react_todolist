/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ToDo(props) {
  return (
    <li className="todo stack-small">
      <div>
        <input id={props.id} type="checkbox" defaultChecked={props.completed} />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success">
            Edit <span className="visually-hidden">{props.name}</span>
          </Button>
          <Button variant="outlined" color="error">
            Delete <span className="visually-hidden">{props.name}</span>
          </Button>
        </Stack>
      </div>
    </li>
  );
}
