/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
// import { teal, pink } from "@mui/material/colors";

// const theme = createTheme({
//   palette: {
//     primary: teal[800],
//     secondary: pink[300],
//   },
// });

export default function ToDo(props) {
  return (
    // <ThemeProvider theme={theme}>
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
          <Button variant="outlined" color="secondary">
            Delete <span className="visually-hidden">{props.name}</span>
          </Button>
        </Stack>
      </div>
    </li>
    // </ThemeProvider>
  );
}
