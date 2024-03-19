import { createContext,useContext, useState } from "react";
import {books} from "../data/bookData"

export const BookContext=createContext();

export const BookProvider=({children})=>{
  const [bookList,setBookList]=useState(books);

  const toggleBookShelf=(payload)=>{
    const {payload: {bookId, category}} = payload;
    let books=bookList.map((book)=>{
      if(book.id===bookId){
        return {...book,category}
      }
      return book;
    })
    setBookList(books);
  }

    return(
        <BookContext.Provider value={{bookList,toggleBookShelf}}>{children}</BookContext.Provider>
    )
}

export const useBook=()=>useContext(BookContext);