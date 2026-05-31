function TodoFilter({
  filter,
  setFilter,
}) {
  const filters = [
    {
      key: "all",
      label: "Tất cả",
    },
    {
      key: "active",
      label: "Chưa xong",
    },
    {
      key: "completed",
      label: "Hoàn thành",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() =>
            setFilter(f.key)
          }
          style={{
            flex: 1,
            padding: "10px",
            background:
              filter === f.key
                ? "#3498db"
                : "#eee",
            color:
              filter === f.key
                ? "white"
                : "black",
            border: "none",
            borderRadius: "5px",
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;