import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    book_name,
    tags,
    author_name,
    book_img,
    published_date,
    rating,
    pages,
    id,
  } = book;
  return (
    <Link to={`/books/${id}`}>
      <div className="card   p-6  ">
        <figure className="bg-gray-400 p-6 rounded-lg">
          <img
            src={book_img}
            className="w-full h-[300px] rounded-lg"
            alt="books img "
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center  mb-2 ">
            {tags.map((tag) => (
              <button className="btn btn-sm bg-green-200 text-green-500">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {book_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-bold ">BY: {author_name}</p>
          <hr />
          <div className="card-actions justify-between mt-1 items-center">
            <h1 className="font-bold">Rating</h1>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
