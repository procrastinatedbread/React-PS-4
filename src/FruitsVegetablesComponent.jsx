import { useState } from "react";

const FruitsVegetablesComponent = ({ itemList }) => {
  const [allItemsList, setAllItemsList] = useState(itemList);

  return (
    <>
      <button
        onClick={() => {
          setAllItemsList(itemList);
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          setAllItemsList(itemList.filter((item) => item.category === "Fruit"));
        }}
      >
        Fruit
      </button>
      <button
        onClick={() => {
          setAllItemsList(
            itemList.filter((item) => item.category === "Vegetable")
          );
        }}
      >
        Vegetables
      </button>
      {allItemsList.map(({ id, name, category }) => {
        return (
          <>
            <li
              key={id}
              style={{ color: category === "Fruit" ? "orange" : "green" }}
            >
              {name}
            </li>
          </>
        );
      })}
    </>
  );
};
export default FruitsVegetablesComponent;
