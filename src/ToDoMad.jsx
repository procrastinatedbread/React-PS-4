import { useState } from "react";

const ToDoMad = ({ todoItems }) => {
  const [toDo, setToDo] = useState(todoItems);
  const handleOnClick = (id) => {
    setToDo(
      toDo.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };
  return (
    <>
      {toDo.map(({ id, task, isDone }) => {
        return (
          <p
            key={id}
            style={{
              color: isDone ? "red" : "black",
              textDecoration: isDone ? "line-through" : ""
            }}
          >
            {task}
            <button onClick={() => handleOnClick(id)}>Mark as Done</button>
          </p>
        );
      })}
    </>
  );
};
export default ToDoMad;
