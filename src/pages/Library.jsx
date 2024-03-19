import { useNavigate } from "react-router";
import { BookCard } from "../component/BookCard";
import { useBook } from "../context/BookContext";
import { useState } from "react";

export const Library = () => {
  const navigate = useNavigate();
  const { bookList } = useBook();
  const [searchInput, setSearchInput] = useState("");
  const booksInLibrary = bookList.filter(
    (book) =>
      book.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      book.authorName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <h1 className="text-center text-xl font-medium">Library page</h1>
      <div className="flex justify-center my-4">
        <span
          className="mr-4 text-xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        <input
          type="text"
          placeholder="search book"
          className="border border-slate-400 px-2"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <ul className="flex flex-wrap mx-auto w-[90vw]">
        {booksInLibrary.length > 0 ? (
          booksInLibrary?.map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))
        ) : (
          <p className="text-xl text-red-500">Book is not available</p>
        )}
      </ul>
    </>
  );
};
