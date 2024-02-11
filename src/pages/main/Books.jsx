import React, { useEffect, useState } from 'react'
import useBooksStore from '../../store/books'
import BookModal from './BooksModal'
export default function Books() {
    const {books, getBooks} = useBooksStore()
    const {book, updateBook} = useBooksStore()
    const [modal, setModal] = useState("")
        const [edit, setEdit] = useState("");
    useEffect(()=>{
        getBooks()
    })
    const toggle = () => {
      setModal(false);
      setEdit("");
    };
    return (
    <div className='ml-[20px]'>
      <BookModal edit={edit} open={modal} toggle={toggle} />
      <button
        className="p-[10px] bg-primary-700 ml-[20px] mt-[20px]"
        onClick={() => setModal(true)}
      >
        Add Books
      </button>
      <div>
      </div>
    </div>
  );
}
