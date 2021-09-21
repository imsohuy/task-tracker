import "./App.css";
import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "The Big Short",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Margin Call",
      day: "Sep 11th at 4:20pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Shopee Sale",
      day: "Mar 20th at 0:90pm",
      reminder: false,
    },
  ]);

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add task
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 1000) + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header title="Task tracker" />
      <AddTasks onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
