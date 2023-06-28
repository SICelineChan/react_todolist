/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import ToDoInput from "./components/ToDoInput";
import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import ToDo from "./components/ToDo";

function App() {
  const [items, setItems] = useState([]);

  const [tasks, settasks] = useState();

  function addItem(textInput) {
    setItems((prevItems) => {
      return [...prevItems, textInput];
    });
  }

  function removeItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((textInput, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Container maxWidth="lg">
        <div className="title">
          <Navbar text="My todo list" />
          <h1>To Do List</h1>
          <ToDoInput onPass={addItem} />
        </div>
        <div>
          <ul>
            {items.map((itemToDo, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={itemToDo}
                onChecked={removeItem}
              />
            ))}
          </ul>
        </div>
        <h2>Another example of a ToDo</h2>

        <div>
          <ToDo />
        </div>
      </Container>
    </>
  );
}

export default App;
