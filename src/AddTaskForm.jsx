import { useState } from "react";

export default function AddTaskForm({ addTask }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTask(text);
    setText("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача"
        style={{
          width: "200px",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #bbb",
        }}
      />
      <button
        style={{
          padding: "8px 12px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Добавить
      </button>
    </form>
  );
}
