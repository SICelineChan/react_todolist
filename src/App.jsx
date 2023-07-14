/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import ToDoInput from "./components/ToDoInput";
import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import ToDo from "./components/ToDo";
import "./someStyles.css";

function App(props) {
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

  const taskList = props.tasks.map((task) => (
    <ToDo
      id={task.id}
      key={task.id}
      name={task.name}
      completed={task.completed}
    />
  ));

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
      </Container>

      <h2>Another example of a ToDo</h2>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <div>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    </>
  );
}

export default App;
