import { Link } from "react-router-dom";
import { BookCard } from "../component/BookCard";
import { useBook } from "../context/BookContext";

export const Home = () => {
  const { bookList } = useBook();
  const currently_reading = bookList.filter(
    ({ category }) => category === "currently_reading"
  );
  const want_to_read = bookList.filter(
    ({ category }) => category === "want_to_read"
  );
  const read = bookList.filter(({ category }) => category === "read");

  return (
    <div className="flex flex-col items-center">
      <Link to="library" className="text-blue-500 underline text-lg">See All Books</Link>
      <h2 className="border-y border-slate-700 w-[100%] p-2 text-center text-xl font-medium text-slate-600 my-4">Currently Reading</h2>
      {currently_reading.length > 0 ? (
        <div className="flex flex-wrap">
          {currently_reading.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-red-500 text-lg">No book currently reading</p>
      )}
      <h2 className="border-y border-slate-700 w-[100%] p-2 text-center text-xl font-medium text-slate-600 my-4">Want To Read</h2>
      {want_to_read.length > 0 ? (
        <div className="flex flex-wrap">
          {want_to_read.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p  className="text-red-500 text-lg">No book want to read</p>
      )}
      <h2 className="border-y border-slate-700 w-[100%] p-2 text-center text-xl font-medium text-slate-600 my-4">Read</h2>
      {read.length > 0 ? (
        <div className="flex flex-wrap">
          {read.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p  className="text-red-500 text-lg">No book in this shelf</p>
      )}
    </div>
  );
};
