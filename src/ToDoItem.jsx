export default function ToDoItem({ text, onDelete }) {
  return (
    <li
      style={{
        listStyle: "none",
        padding: "10px 12px",
        background: "green",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
      }}
    >
      <span>{text}</span>

      <button
        onClick={onDelete}
        style={{
          padding: "6px 10px",
          background: "#d9534f",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          color: "white",
        }}
      >
        Удалить
      </button>
    </li>
  );
}
