import { useState } from "react";

const Books = ({ books }) => {
  const [allBooks, setAllBooks] = useState(books);
  const handleAllGenres = () => {
    setAllBooks(books);
  };
  const handleClassics = () => {
    setAllBooks(books.filter((book) => book.genre === "Classic"));
  };
  const handleDystopian = () => {
    setAllBooks(books.filter((book) => book.genre === "Dystopian"));
  };
  const handleYoungAdult = () => {
    setAllBooks(books.filter((book) => book.genre === "Young Adult"));
  };

  return (
    <>
      <button onClick={handleAllGenres}>All Genres</button>
      <button onClick={handleClassics}>Classics</button>
      <button onClick={handleDystopian}>Dystopian</button>
      <button onClick={handleYoungAdult}>Young Adult</button>
      {allBooks.map(({ id, title, author }) => {
        return (
          <>
            <h1 key={id}>{title}</h1>

            <p>{author}</p>
          </>
        );
      })}
    </>
  );
};
export default Books;
