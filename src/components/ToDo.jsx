import Button from "@mui/material/Button";

export default function ToDo() {
  return (
    <li className="todo stack-small">
      <div>
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          Eat
        </label>
      </div>
      <div>
        <Button variant="contained" color="success">
          Edit
        </Button>
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </div>
    </li>
  );
}
