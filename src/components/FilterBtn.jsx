import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, lime } from "@mui/material/colors";
import { Stack } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: lime,
  },
});

export default function FilterBtn() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" gap={6}>
        <Button
          type="button"
          className="btn toggle-btn"
          aria-pressed="true"
          color="primary"
        >
          show
        </Button>
        <Button variant="contained" color="secondary">
          <span className="visually-hidden">Show </span>
          <span>all </span>
          <span className="visually-hidden"> tasks</span>
        </Button>
      </Stack>
    </ThemeProvider>
  );
}
