import { useState, useEffect } from "react";
import AddTaskForm from "./AddTaskForm";
import ToDoList from "./ToDoList";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text) {
    if (text.trim() === "") return;
    setTasks([...tasks, text]);
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function clearAll() {
    setTasks([]);
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",            // сверху
        left: "50%",            // центр по оси X
        transform: "translateX(-50%)", // точное центрирование
        width: "350px",
        textAlign: "center",
        fontFamily: "Arial"
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>ToDo App</h2>

      <AddTaskForm addTask={addTask} />

      <ToDoList tasks={tasks} removeTask={removeTask} />

      {tasks.length > 0 && (
        <button
          onClick={clearAll}
          style={{
            marginTop: "15px",
            padding: "10px 16px",
            background: "#ff4c4c",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Очистить всё
        </button>
      )}
    </div>
  );
}
