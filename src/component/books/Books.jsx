import React, { useEffect, useState } from 'react';
import Book from '../book/Book';

const Books = () => {
    const [books,setBooks]= useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data));
    },[])
    return (
        <div>
          <h1 className='text-3xl  text-center font-bold'>Books</h1> 
          <p className='text-center font-bold'>total books : {books.length}</p>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-6 ' >
            {
              books.map(book=><Book key={book.id} book={book} ></Book>)  
            }
          </div>
        </div>
    );
};

export default Books;