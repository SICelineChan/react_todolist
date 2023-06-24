import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <div className="title">
          <Navbar text="My todo list" />
          <h1>To Do List</h1>
        </div>
      </Container>
    </>
  );
}

export default App;
