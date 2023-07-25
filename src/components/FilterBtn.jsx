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
          show all
        </Button>
        <Button variant="contained" color="secondary">
          show completed
        </Button>
      </Stack>
    </ThemeProvider>
  );
}
