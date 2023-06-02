import { useState } from "react";

const ToDo = ({ todoItems }) => {
  const [allItems, setAllItems] = useState(todoItems);
  return (
    <>
      <h1>Todo list</h1>
      <ul>
        {allItems.map(({ id, task, isDone }) => {
          return (
            <>
              <li
                key={id}
                style={{
                  textDecoration: isDone ? "line-through" : "none"
                }}
              >
                {task}
                <button
                  onClick={() => {
                    setAllItems(allItems.filter((task) => task.id !== id));
                  }}
                >
                  X
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default ToDo;
