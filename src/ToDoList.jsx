import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, removeTask }) {
  return (
    <ul
      style={{
        padding: 0,
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          text={task}
          onDelete={() => removeTask(index)}
        />
      ))}
    </ul>
  );
}
