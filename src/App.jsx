/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Navbar from "./components/Navbar";
import ToDoInput from "./components/ToDoInput";
import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import ToDo from "./components/ToDo";
import "./someStyles.css";
import FilterBtn from "./components/FilterBtn";
import TaskListForm from "./components/TaskListForm";
import { nanoid } from "nanoid";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const FILTER_MAP = {
  ALL: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [items, setItems] = useState([]);
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("ALL");

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

  const filterList = FILTER_NAMES.map((name) => (
    <FilterBtn
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <ToDo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function addingTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function deleteTask(id) {
    console.log(id);
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <>
      <Container maxWidth="lg">
        <Navbar text="My todo lists" />
        <h1 style={{ textAlign: "center" }}>A simple TO-Do List</h1>
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 400,
              height: 256,
            },
          }}
        >
          <ToDoInput onPass={addItem} />
          <Paper elevation={12}>
            <h3 style={{ textAlign: "center" }}>
              Added todos will appear here!
            </h3>
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
          </Paper>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <h1 style={{ textAlign: "center" }}>A More Complicated ToDo List!</h1>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid xs={6}>
            <TaskListForm addingTask={addingTask} />
          </Grid>
          Filter your tasks:
          {filterList}
        </Grid>

        <h2 id="list-heading">{headingText}</h2>
        <div>
          <ol role="list" aria-labelledby="list-heading">
            {taskList}
          </ol>
        </div>
      </Container>
    </>
  );
}

export default App;
