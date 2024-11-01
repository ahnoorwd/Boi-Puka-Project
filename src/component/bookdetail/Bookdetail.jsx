import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addstoremarkAsread } from '../handle/Handlemark';
import { addstorewishmarkAsread } from '../handlewish/handlewish';

const Bookdetail = () => {
    const {bookID} = useParams();
    // console.log(bookID);
    const data = useLoaderData();
    const id= parseInt(bookID);
    const book = data.find(book =>  book.id ===id)
    // console.log(book)

    const {book_img,about} =book;

    const handlemarkAsRead = (id) =>{
        addstoremarkAsread(id);
    }

    const handlewishread = (id) =>{
       addstorewishmarkAsread(id);
    }
    

    return (
        <div className=''>
              <h1 className='mb-4'>Books Number : {bookID} </h1>
              <img className='h-[200px]'  src={book_img} alt="book image" />
              <div className='mt-4 '>
              <button onClick={()=>handlemarkAsRead(bookID)} className="btn mr-2  bg-green-500 text-white">Read To Mark</button>
              <button onClick={()=>handlewishread(bookID)} className="btn  bg-green-500  text-white">Add to Wishlist</button>
              </div> 

              <div>{about}</div> 
        </div>
    );
};

export default Bookdetail;