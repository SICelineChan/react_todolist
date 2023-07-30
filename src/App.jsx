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
import FilterBtn from "./components/FilterBtn";
import TaskListForm from "./components/TaskListForm";
import { nanoid } from "nanoid";

import Grid from "@mui/material/Unstable_Grid2";

function App(props) {
  const [items, setItems] = useState([]);

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

  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks.map((task) => (
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

      <Container maxWidth="lg">
        <h1 style={{ textAlign: "center" }}>A More Complicated ToDo List!</h1>
        <Grid container spacing={2} columns={16}>
          <Grid md={8}>
            <TaskListForm addingTask={addingTask} />
          </Grid>
          <Grid xs={8} mdOffset={1}>
            <FilterBtn />
          </Grid>
        </Grid>

        <h2 id="list-heading">{headingText}</h2>
        <div>
          <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
          >
            {taskList}
          </ul>
        </div>
      </Container>
    </>
  );
}

export default App;
