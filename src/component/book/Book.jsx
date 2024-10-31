import React from 'react';

const Book = ({book}) => {
    const {book_name,author_name,book_img,published_date,rating,pages} = book;
    return (
        <div className="card   p-6  ">
  <figure className="bg-gray-400 p-6 rounded-lg" >
    <img
      src={book_img}
      className='w-full h-[300px] rounded-lg'
      alt="books img " />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {
        book_name
      }
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className='font-bold '>{author_name}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default Book;