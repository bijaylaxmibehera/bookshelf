import { useState } from "react";
import { useBook } from "../context/BookContext";

export const BookCard = ({ book }) => {
  const { toggleBookShelf } = useBook();
  const { id, imageURL, name, authorName, category } = book;
  const [showOption, setShowOption] = useState(false);

  const setCategoryHandler = (e, id) => {
    toggleBookShelf({ payload: { bookId: id, category: e.target.value } });
  };
  return (
    <>
      <div className="shadow-lg w-[200px] h-[300px] m-2 p-2 relative rounded-md">
        <img
          src={imageURL}
          alt={name}
          className="w-[200px] h-[200px] mb-4"
        />
        <div className="absolute right-[10px] mt-[-50px] cursor-pointer">
          <span className="bg-green-600 rounded-full text-white px-4 py-2">
            <i class="fa-solid fa-caret-down" onClick={()=>setShowOption(!showOption)}></i>
          </span>
        </div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-slate-500">{authorName}</p>

        {showOption && (
          <select value={category} onChange={(e) => setCategoryHandler(e, id)} className="absolute right-0 mt-[-80px] p-2 mr-1  cursor-pointer bg-sky-100">
            <option value="none">none</option>
            <option value="read">read</option>
            <option value="currently_reading">currently reading</option>
            <option value="want_to_read">want to read</option>
          </select>
        )}
      </div>
    </>
  );
};
