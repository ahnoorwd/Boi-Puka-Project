import React, { useEffect, useState } from 'react';

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
        </div>
    );
};

export default Books;